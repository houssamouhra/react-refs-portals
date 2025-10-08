import { useState, useRef } from "react";

const Player = () => {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id='player'>
      <header>
        <h1>
          The <em>almost</em> final countdown
        </h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
      </header>
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type='text' ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
