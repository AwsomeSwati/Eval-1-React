import React from "react";
import AddTask from "./components/AddTask/AddTask";
import Counter from "./components/Counter/Counter";
import tasks from "./data/tasks.json"
import Task from "./components/Task/Task"
import TaskApp from "./components/TaskApp";

function App() {
  return <div>
    <h3>Todo List</h3>
   {<TaskApp></TaskApp>}

   
  </div>;
}

export default App;
