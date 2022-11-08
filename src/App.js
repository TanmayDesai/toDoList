import './App.css';
import Input from './components/Input';
import Display from './components/Display';
import Tasks from "./components/Tasks";
import Progress from './components/Progress';
import { useState, useEffect } from 'react';
import {collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import { db } from "./Firebase";


function App() {
  const[tasks, setTasks] = useState([])
  const[view, setView] = useState("default")

  useEffect(()=>onSnapshot(collection(db,'todo'),(snapshot)=>{
    setTasks(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))}),[])

  const changeView = (viewName) => {
    setView(viewName)
    //alert(`${viewName} clicked`)
  }

  const addToList = (val) => {
    if(val === ""){
      alert("Please add a valid task and try again :)")
      return;
    }
    addDoc(collection(db, 'todo'), {
      task: val,
      isCompleted: false
    });
    //console.log(val)
  }

  const toggleStatus = (id,name) =>{
    let i = tasks.findIndex(a=>a.task === name)
    //alert(id)
    let boo = tasks[i].isCompleted
    const ref = doc(db, 'todo',id)
    updateDoc(ref,{
      isCompleted: !boo
    })
  }

  const taskCompleted = tasks.filter((item)=> item.isCompleted === true)
  const taskIncomplete = tasks.filter((item)=> item.isCompleted === false)

  const handleDelete = (id) => {
    //alert('Delete Item')
    const ref = doc(db, 'todo',id)
    deleteDoc(ref)
  }

  switch(view){
    case "complete": return(
      <div className="App">
      {console.log(tasks)}
      <h2 className='title'>To Do List</h2>
      <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
      <Display tasks = {taskCompleted} handleClick={toggleStatus} handleDelete={handleDelete}/>
      <Progress tasks={tasks} />
      </div>);
      break;
    case "incomplete": return(
      <div className="App">
      {console.log(tasks)}
      <h2 className='title'>To Do List</h2>
      <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
      <Display tasks = {taskIncomplete} handleClick={toggleStatus} handleDelete={handleDelete}/>
      <Progress tasks={tasks} />
      </div>);
      break;
    case "default": return(
      <div className="App">
      {console.log(tasks)}
      <h2 className='title'>To Do List</h2>
      <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
      <Display tasks = {tasks} handleClick={toggleStatus} handleDelete={handleDelete}/>
      <Progress tasks={tasks} />
      </div>);
      break;
    default: return (
      <div className="App">
        {console.log(tasks)}
        <h2 className='title'>To Do List</h2>
        <Input tasks = {tasks} listAdd = {addToList} changeView={changeView} />
        <Display tasks = {tasks} handleClick={toggleStatus} handleDelete={handleDelete}/>
        <Progress tasks={tasks} />
      </div>
    );
  }

  
}

export default App;
