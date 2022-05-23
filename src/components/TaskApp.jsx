import React from "react";
import AddTask from "./AddTask/AddTask";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";
import tasks from "../data/tasks.json"
import styles from "./taskApp.module.css";

const TaskApp = ({done}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task *}
      {/* Tasks */}
     <TaskHeader />
      <AddTask>
      {tasks.map((listData)=>(
       <Tasks {...listData} listData={listData} text={listData.text} done={done} /> 
      ))}
      </AddTask>
      <Tasks />
    </div>
  );
};

export default TaskApp;
