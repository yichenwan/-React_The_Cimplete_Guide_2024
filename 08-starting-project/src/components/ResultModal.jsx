export default function ResultModal({ref, result, targetTime}) {
    return (
    <dialog ref={ref} className="result-modal">
        <h2>You {result}</h2>
        <p>The target time was <string>{targetTime} seconds.</string></p>
        <p>Tou stopped the timer with <strong>X seconds left.</strong></p>
        <form method="dialog"> 
            <button>Close</button>
        </form>
    </dialog>);
}