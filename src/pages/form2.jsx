import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} placeholder="Enter name" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}

export default FocusInput;