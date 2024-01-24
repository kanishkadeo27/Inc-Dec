import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ToDoList() {
  const [num, setNum] = useState(0);

  const incFn=()=>{
    setNum(num+1);
  }
  const decFn=()=>{
    if (num>0) {
        setNum(num-1);
    } else {
        alert("oops!!sorry but you can't decrement below 0");
        setNum(0);
    }
  }
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>{num}</h1>
          <div className="button-div">
            <button onClick={incFn}><AddIcon/></button>
            <button onClick={decFn}><RemoveIcon/></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
