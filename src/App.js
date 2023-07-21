import { useState } from "react";

// custom hooks
import useLocalStorage from "./hooks/useLocalStorage";

import CustomForm from "./components/CustomForm";
import ScheduleList from "./components/ScheduleList";
import EditForm from "./components/EditForm";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {

  const [schedules, setSchedule] = useLocalStorage("todo-list.schedules", []);
  const [editSchedule, setEditSchedule] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [prevFocusEl, setPrevFocusEl] = useState(null);
  

  const addSchedule = (schedule) => {
    setSchedule( prevState => [...prevState, schedule])
  }

  const deleteSchedule = (id) => {
    setSchedule(prevState => prevState.filter(s => s.id !== id))
  }

  const updateSchedule = (id) => {
    setSchedule(prevState => prevState.map(s => (
      s.id === id ? {...s, checked: !s.checked} : s 
      )))
  }

  const updatedSchedule = (schedule) => {
    setSchedule(prevState => prevState.map(s => (
      s.id === schedule.id ? {...s, name: schedule.name} : s 
      )))
      closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false)
    prevFocusEl.focus();
  }

  const enterEditMode = schedule => {
    setEditSchedule(schedule);
    setIsEditing(true)
    setPrevFocusEl(document.activeElement);
  }

  return (
    <div className="container">
      <header>
        <h1>My Bucket List</h1>
      </header>
      {
        isEditing && 
        <EditForm
          editSchedule={editSchedule}
          updatedSchedule={updatedSchedule}
          closeEditMode={closeEditMode}
        />
      }
        
        <CustomForm addSchedule={addSchedule}/>
        {schedules && <ScheduleList 
          schedules={schedules}
          deleteSchedule={deleteSchedule}
          updateSchedule={updateSchedule}
          enterEditMode={enterEditMode}
        />}
      <ThemeSwitcher/>
    </div>
  );
}

export default App;
