import "./MealsItemForm.css";
function MealsItemForm() {
  return (
    <form>
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

      <button>+ Add</button>
    </form>
  );
}

export default MealsItemForm;