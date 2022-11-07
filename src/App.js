import './App.css';
import Input from './components/Input';
import Display from './components/Display';
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {
  const[tasks, setTasks] = useState(Tasks)

  const addToList = (val) => {
    setTasks(tasks => [...tasks,{
      task: val,
      isCompleted: false
    },])
    console.log(val)
  }

  const toggleStatus = (name) =>{
    console.log(`delete ${name}`)
    let arr = [...tasks]
    let i = arr.findIndex(a=>a.task === name)
    console.log(i)
    arr[i].isCompleted = arr[i].isCompleted? false : true
    setTasks(arr)
  }


  return (
    <div className="App">
      {console.log(tasks)}
      <h2>To Do List</h2>
      <Input tasks = {tasks} listAdd = {addToList}/>
      <Display tasks = {tasks} handleClick={toggleStatus} />
    </div>
  );
}

export default App;
