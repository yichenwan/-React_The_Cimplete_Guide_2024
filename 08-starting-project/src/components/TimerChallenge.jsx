import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title , targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timerStared, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true); 
            dialog.current.showModal();           
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }
    
    return (
        <>
        {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>}
        <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's': ''}
        </p>
        <p>
            <button onClick={timerStared? handleStop: handleStart}>
                {timerStared ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStared? 'active' : undefined}>
            {timerStared? 'Time is running...' : 'Time inactive'}
        </p>
        </section>
        </>
    );
}