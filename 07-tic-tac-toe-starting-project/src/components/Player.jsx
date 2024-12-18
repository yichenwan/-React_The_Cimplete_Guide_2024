import { useState } from 'react';

export default function Player({initialName, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing)=>!isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let edidablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';

  if (isEditing) {
    edidablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    btnCaption = 'Save';
  }

  return (
      <li className={isActive? 'active': undefined}>
        <span className="player">
          {edidablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
      </li>        
  );
}