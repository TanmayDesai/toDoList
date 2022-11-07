import './App.css';
import Input from './components/Input';
import Display from './components/Display';
import Tasks from "./components/Tasks";
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useState } from 'react';

function App() {
  const[tasks, setTasks] = useState(Tasks)
  const[view, setView] = useState("default")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeView = (viewName) => {
    setView(viewName)
    //alert(`${viewName} clicked`)
  }

  const OffCanvas = () => {
    return (
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>To Do List App</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Add Tasks by typing them and clicking on the add button. 
          You can also tap on the card to change the status of the task. 
          Green represents the tasks that have been completed while red represents the tasks that are not yet completed. 
          You can also view the completed and incomplete tasks by clicking the respective buttons.
          - Tanmay Desai
        </Offcanvas.Body>
      </Offcanvas>
    );
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
      <h2 className='title' onClick={handleShow}>To Do List</h2>
      <OffCanvas />
      <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
      <Display tasks = {taskCompleted} handleClick={toggleStatus} />
      </div>);
      break;
    case "incomplete": return(
      <div className="App">
      {console.log(tasks)}
      <h2 className='title' onClick={handleShow}>To Do List</h2>
      <OffCanvas />
      <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
      <Display tasks = {taskIncomplete} handleClick={toggleStatus} />
      </div>);
      break;
    case "default": return(
      <div className="App">
      {console.log(tasks)}
      <h2 className='title' onClick={handleShow}>To Do List</h2>
      <OffCanvas />
      <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
      <Display tasks = {tasks} handleClick={toggleStatus} />
      </div>);
      break;
    default: return (
      <div className="App">
        {console.log(tasks)}
        <h2 className='title' onClick={handleShow}>To Do List</h2>
        <OffCanvas />
        <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
        <Display tasks = {tasks} handleClick={toggleStatus} />
      </div>
    );
  }

  
}

export default App;
