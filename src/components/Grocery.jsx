import { useState } from "react";
import { useEffect } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const addData = (data) => {
    let prototype = {
      title: data,
    };
    fetch("http://localhost:3001/list", {
      method: "POST",
      body: JSON.stringify(prototype),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => getData());
  };

  const getData = () => {
    fetch("http://localhost:3001/list")
      .then((res) => res.json())
      .then((res) => setList(res));
  };

  const deleteitem = (id) => {
    fetch(`http://localhost:3001/list/${id}`, { method: "DELETE" }).then(() =>
      getData()
    );
  };

  return (
    <>
      <h1>Grocery List</h1>
      <GroceryInput addData={addData} />
      {list.map((e, i) => (
        <GroceryList {...e} key={e.id} deleteitem={deleteitem} i={i} />
      ))}
    </>
  );
};
