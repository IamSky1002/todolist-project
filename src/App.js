import InputForm from './component/inputform';
import ListContainer from './component/listcontainer';
import './App.css';
import { useState } from 'react';

function App() {
  const noKey = [{taskName: "ทำอาหาร", id :1},
    {taskName: "รดน้ำต้นไม้", id :2},
    {taskName: "เล่นเกม", id :3},
    {taskName: "ทำงาน", id :4},];
  
  const [item, setTask] = useState(noKey)
  const onAddNewTask=(newTask)=>{
      setTask((preventTask)=>{
        return [newTask,...preventTask]
      })

    }

    // remove task
    const removeTask=(id)=>{
      const newArr =  [...item].filter(task=> task.id !== id);
      setTask(newArr);
    }

    const handleEditTask = (taskId, newTaskName) => {
      const updatedTasks = item.map(task =>
          task.id === taskId ? { ...task, taskName: newTaskName } : task
      );
      setTask(updatedTasks);
  };

  return (
    <div className="App">
      <InputForm onAddTask={onAddNewTask} />
      <ListContainer getTaskName= {item} sendRemove ={removeTask} onEditTask={handleEditTask}/>
      
      
    </div>
    
  );
}

export default App;
