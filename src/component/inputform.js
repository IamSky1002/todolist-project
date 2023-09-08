import { useState } from "react"
import "./inputform.css"
import { v4 as uuidv4 } from 'uuid';


const InputForm= (props)=>{  
    
    const [taskTitle, setTitle] = useState('')

    const inputTask= (e)=>{
        setTitle(e.target.value)
    
    }
    const saveData= (e)=>{

        e.preventDefault()
        const taskData = {
            taskName: taskTitle,
            id:uuidv4()
        }
        props.onAddTask(taskData);
        setTitle('');
        

    }

    return(
        <div>
            <form onSubmit={saveData}>
                <div className="form-control">
                    <input type="text" placeholder="Enter your To-Do-List" onChange={inputTask} value={taskTitle}/>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}
export default InputForm
