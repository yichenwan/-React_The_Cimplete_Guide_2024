export default function ResultModal({ref, targetTime, remainingTime, onReset }) {
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000) ) * 100);
    return (
    <dialog ref={ref} className="result-modal">
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your scores: {score}</h2>}
        <p>The target time was <string>{targetTime} seconds.</string></p>
        <p>Tou stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}> 
            <button>Close</button>
        </form>
    </dialog>);
}