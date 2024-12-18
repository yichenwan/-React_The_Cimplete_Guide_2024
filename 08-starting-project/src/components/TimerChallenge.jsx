import { useState } from "react";

export default function TimerChallenge({ title , targetTime}) {
    const [timerStared, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);
        setTimeout(() => {
            setTimerExpired(true);            
        }, targetTime * 1000);
    }
    
    return (<section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's': ''}
        </p>
        <p>
            <button onClick={handleStart}>
                {timerStared ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStared? 'active' : undefined}>
            {timerStared? 'Time is running...' : 'Time inactive'}
        </p>
    </section>
    );
}