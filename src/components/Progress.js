import ProgressBar from 'react-bootstrap/ProgressBar'

function Progress(props){

  let arr = props.tasks
  console.log(arr.length)
  let inc = 0
  let com = 0
  for(let i=0;i<arr.length;i++){
    if(arr[i].isCompleted === true) com++;
    else inc++
  }
  let total = arr.length
  console.log(inc,com)
  
    return(
    <div className='progress'>
      <ProgressBar>
      <ProgressBar animated variant="success" now={com/total*100}/>
      <ProgressBar animated variant="danger" now={inc/total*100}/>
      </ProgressBar>
      
    </div>
      
     
    );
}

export default Progress;