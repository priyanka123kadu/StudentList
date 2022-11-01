import React, { useState } from "react";
import "./App.css";
import StudentList from "./StudentList"

function App() {
  const [inputList,setInputList]=useState("");
  const [items,setItems]=useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const listOfStudent=()=>{
    setItems((oldName)=>{
      return [...oldName,inputList];
    });
    setInputList("");

  }
  const deleteItems=(id)=>{
    console.log("deleted");
    setItems((oldName)=>{
      return oldName.filter((arrElem,index)=>{
        return index !==id;
      })
    })
  }
  return(
    <>
    <div className="center_div">
      <h1>Student List</h1>
      <label>Name</label>
      <input type="text"
      placeholder="add name"
      value={inputList}
      onChange={itemEvent}/>
      <button onClick={listOfStudent}>Add</button>
      <ol>
        {items.map((itemval,index)=>{
          return <StudentList
          key={index}
          id={index}
          text={itemval}
          onSelect={deleteItems}/>;

        })}
      </ol>
    </div> 
    </>
  )
}

    
export default App;
