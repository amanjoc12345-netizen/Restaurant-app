import MealsItemForm from "./MealsItemForm";

function MealsItem(props) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        padding: "1rem 0",
      }}
    >
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div>{props.price}</div>
      </div>

      <MealsItemForm />
    </li>
  );
}

export default MealsItem;