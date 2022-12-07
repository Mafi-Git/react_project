import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'


function App() {
  const [tasks, setTasks] = useState([
    { 
        id: 1,
        text: 'Tämä on eka päivä',
        day: 'Tänää on ensimmmäinen päivä',
        reminder: true,

    },
    {
        id: 2,
        text: 'this is the text 2',
        day: 'this is the second day',
        reminder: false,
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000) +1
    const newTask ={id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !==
    id))
  }

  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id
    ? {...task, reminder: !task.reminder  } : task))
  }


  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks= {tasks} onDelete=
      {deleteTask} onToggle = {toggleReminder}
      /> : 'No Tasks To Show'}
    </div>

    
  );
}



export default App;
