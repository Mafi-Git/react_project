import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"


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


  return (
    <div className="container">
      <Header />
      <Tasks tasks= {tasks}/>
    </div>

    
  );
}



export default App;
