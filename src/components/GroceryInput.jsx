import { useState } from "react";
import "./GroceryInput.css";

export const GroceryInput= ({saveData}) => {
    const [text,setText] = useState("");
    const getData = (data) => {
        setText(data.target.value);
    }

    return (
        <>
        <input type="text" placeholder="Enter your Grocery Items" onChange={getData} className="inputbox"/>
        <button className="addbutton" onClick={() => saveData(text)}>Add Item</button>
        </>
    )
}