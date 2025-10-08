import { useImperativeHandle, useRef } from "react";

const ResultModal = ({ targetTime, remainingTime, onReset, ref }) => {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => ({
    open: () => dialog.current.showModal(),
  }));

  // prettier-ignore
  return (
    <dialog ref={dialog} className='result-modal'>
      {userLost && <h2>You lost.</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stoped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method='dialog' onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
