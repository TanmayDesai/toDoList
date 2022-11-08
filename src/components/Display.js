// import Tasks from "./Tasks";
import Alert from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton'

const Display = (props) => {


    let arr = Object.values(props.tasks)
    console.log(arr)
    let items = arr.map((task)=>{
        return ( 
        <Alert className='alert' onClick={()=> props.handleClick(task.task)} 
        key={task.task} 
        variant={task.isCompleted? 'success': 'danger'} >
            {task.task}
        <CloseButton disabled className='close' onClick={()=>props.handleDelete(task.task)}/>
        </Alert>
        );
    })

    return(
        <div className="display">
            {items}
        </div>
    );
}


export default Display;