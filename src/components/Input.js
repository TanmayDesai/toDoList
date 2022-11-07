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
        
        //  alert(text)
     
    }

    return(
        <div className="form" onSubmit={handleSubmit}>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Task</Form.Label>
        <Form.Control type="text" value={text} onChange={handleChange}/>
        </Form.Group>
        <Button className="b" variant="primary" type="submit" >
        Add Task
        </Button>
        <Button className="b" variant="primary" type="submit" >
        Incomplete
        </Button>
        <Button className="b" variant="primary" type="submit" >
        Complete
        </Button>
        <Button className="b" variant="primary" type="submit" >
        All Tasks
        </Button>
        </Form>
        </div>
    )
}


export default Input;