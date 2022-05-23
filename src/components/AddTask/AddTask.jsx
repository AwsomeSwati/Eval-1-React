import React, { useState } from "react";
import styles from "./addTask.module.css";
import Task from "../Task/Task";
import Tasks from "../Tasks/Tasks";
// import tasks from ".../data/tasks.json"


const AddTask = () => {
  // console.log(data)
  // NOTE: do not delete `data-cy` key value pair
     const [value,setValue] = useState("")
     const [todoArr,setTodoArr] = useState([])

   const handleInput = (e)=>{
    
   const data ={ 
    "id": 11,
    "text": value,
    "done": e.target.checked,
    "count": 2
   }
  console.log(data)
   setTodoArr ([...todoArr,data])
    setValue("")
  }

  return (
    <div className={styles.todoForm}>
    
      <input data-cy="add-task-input" type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button data-cy="add-task-button" onClick={handleInput}>+</button>

    { todoArr.map((info)=>(
    <Tasks {...todoArr} key={info.id} value={info.text} />
    ))}
    </div>
  );
};

export default AddTask;
