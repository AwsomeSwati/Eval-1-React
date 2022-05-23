import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({value,key,listData,text,todoArr,done}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [isComplete,setIsComplete] = React.useState(todoArr.done)
  return (
    <li data-cy="task" className={styles.task}>
    
     
      <div data-cy="task-text">
      <input type="checkbox" data-cy="task-checkbox" onChange={(e) =>{
        console.log(e.target.checked)
        setIsComplete(e.target.checked);
      }}/>
      <div className={isComplete ? styles.striked : ""}>
        {value}
        {<Counter />} 
        {}
        </div>
      {/* <button data-cy="task-remove-button">Remove</button> */}
      </div>



      
     
       
      
    </li>
  );
};

export default Task;
