import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';


const CustomForm = ({addSchedule}) => {

    const [schedule, setSchedule] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addSchedule({
        name: schedule,
        checked: false,
        id: Date.now()
        })
        setSchedule("")
    }
    

  return (
    <form className="todo"
    onSubmit={handleFormSubmit}
    >
      <div className="wrapper">
        <input 
            type="text" 
            id="task"
            className="input"
            value={schedule}
            onInput={(e) => setSchedule(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Schedule Task"
        />
        <label 
            htmlFor="task"
            className="label"
        >Schedule Task</label>
      </div>
      <button
        className="btn"
        aria-label="Add Schedule"
        type="submit"
        >
        <PlusIcon />
        </button>
    </form>
  )
}

export default CustomForm
