import { useState } from "react";
import "./GroceryInput.css";

export const GroceryInput = ({ addData }) => {
  const [text, setText] = useState("");
  const getData = (data) => {
    setText(data.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Enter your Grocery Items"
        onChange={getData}
        className="inputbox"
      />
      <button
        className="addbutton"
        onClick={() => {
          addData(text);
          setText("");
        }}
      >
        Add Item
      </button>
    </>
  );
};
