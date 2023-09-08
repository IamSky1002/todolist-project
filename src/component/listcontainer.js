import ListTask from "./item"
import "./listcontainer.css"
const ListContainer= (props)=> {
    const {getTaskName, sendRemove,onEditTask } = props;
    return(
        <div>
            
            {getTaskName.map((event)=>{
                return <ListTask 
                taskName ={event.taskName} 
                key={event.id} 
                onRemove={()=>sendRemove(event.id)}
                onEdit={(newTaskName) => onEditTask(event.id, newTaskName)}/>
                
            })}          

        </div>
    )
}
export default ListContainer