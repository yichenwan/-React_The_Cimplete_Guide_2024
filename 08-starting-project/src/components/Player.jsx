import { useState } from "react";

export default function Player() {
  
  const [enteredPlayerNmae, setEnteredPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerNmae : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerNmae}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
