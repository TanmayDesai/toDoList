import './App.css';
import Input from './components/Input';
import Display from './components/Display';
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {
  const[tasks, setTasks] = useState(Tasks)
  const[view, setView] = useState("default")

  const changeView = (viewName) => {
    setView(viewName)
    //alert(`${viewName} clicked`)
  }

  const addToList = (val) => {
    if(val === ""){
      alert("Please add a valid task and try again :)")
      return;
    }
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

  const taskCompleted = tasks.filter((item)=> item.isCompleted === true)
  const taskIncomplete = tasks.filter((item)=> item.isCompleted === false)

  switch(view){
    case "complete": return(
      <div className="App">
      {console.log(tasks)}
      <h2 className='title'>To Do List</h2>
      <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
      <Display tasks = {taskCompleted} handleClick={toggleStatus} />
      </div>);
      break;
    case "incomplete": return(
      <div className="App">
      {console.log(tasks)}
      <h2 className='title'>To Do List</h2>
      <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
      <Display tasks = {taskIncomplete} handleClick={toggleStatus} />
      </div>);
      break;
    case "default": return(
      <div className="App">
      {console.log(tasks)}
      <h2 className='title'>To Do List</h2>
      <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
      <Display tasks = {tasks} handleClick={toggleStatus} />
      </div>);
      break;
    default: return (
      <div className="App">
        {console.log(tasks)}
        <h2 className='title'>To Do List</h2>
        <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
        <Display tasks = {tasks} handleClick={toggleStatus} />
      </div>
    );
  }

  
}

export default App;
