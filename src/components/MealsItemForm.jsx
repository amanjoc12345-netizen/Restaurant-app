import { useRef, useState } from "react";
import "./MealsItemForm.css";

function MealsItemForm(props) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };

  const inputId = `amount_${props.id}`;

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor={inputId}>Amount</label>
        <input
          ref={amountInputRef}
          id={inputId}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>

      <button type="submit">+ Add</button>
      {!amountIsValid && (
        <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0.25rem" }}>
          Please enter a valid amount (1-5).
        </p>
      )}
    </form>
  );
}

export default MealsItemForm;