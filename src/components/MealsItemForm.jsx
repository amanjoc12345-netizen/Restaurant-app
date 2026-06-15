import "./MealsItemForm.css";

function MealsItemForm(props) {

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddToCart();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          min="1"
          max="5"
          defaultValue="1"
        />
      </div>

      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealsItemForm;