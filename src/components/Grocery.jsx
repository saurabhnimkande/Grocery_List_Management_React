import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from 'nanoid'

export const Grocery = () => {
    const [list,setList]=useState([]);
    const saveData = (data) => {
        let prototype={
            title:data,
            id:nanoid()
        }
        setList([...list,prototype])
    }

    const deleteitem = (id) => {
        let updatedlist=list.filter((e) => e.id !== id)
        setList(updatedlist);
    }

    return (
        <>
        <h1>Grocery List</h1>
        <GroceryInput saveData={saveData}/>
        {list.map((e,i) => (
            <GroceryList {...e} key={e.id} deleteitem={deleteitem} i={i}/>
        ))}
        </>
    )
}