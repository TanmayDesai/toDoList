// import Tasks from "./Tasks";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const Input = (props) => {
    const[text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(text)
        props.listAdd(text)
        setText("")
        //  alert(text)
     
    }

    return(
        <div className="form" onSubmit={handleSubmit} autoComplete="off">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Task</Form.Label>
        <Form.Control type="text" value={text} onChange={handleChange} autoComplete="off" />
        </Form.Group>
        <Button className="b" variant="primary" type="submit" >
        Add Task
        </Button>
        <Button className="b" variant="primary" onClick={()=> props.changeView("incomplete")} >
        Incomplete
        </Button>
        <Button className="b" variant="primary" onClick={()=> props.changeView("complete")} >
        Complete
        </Button>
        <Button className="b" variant="primary" onClick={()=> props.changeView("default")} >
        All Tasks
        </Button>
        </Form>
        </div>
    )
}


export default Input;