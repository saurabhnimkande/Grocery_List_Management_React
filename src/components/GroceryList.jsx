import "./GroceryList.css";
export const GroceryList = ({ title, id, deleteitem, i }) => {
  return (
    <>
      <h2>
        {i + 1}. {title}{" "}
        <button onClick={() => deleteitem(id)} className="deletebutton">
          Delete
        </button>
      </h2>
    </>
  );
};
