import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id='player'>
      <h1>
        The <em>almost</em> final countdown
      </h1>
      <p>Stop the timer once you estimate that time is (almost) up</p>
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type='text' ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
