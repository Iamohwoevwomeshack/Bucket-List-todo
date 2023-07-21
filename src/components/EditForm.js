
import { CheckIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';


const EditForm = ({editSchedule, updatedSchedule, closeEditMode}) => {

    const [updateSchedule, setUpdateSchedule] = useState(editSchedule.name)

    useEffect(() => {
        const closePopIfEscaped = e => {
            e.key === "Escape" && closeEditMode()
        }

        window.addEventListener("keydown", closePopIfEscaped)

        return () => {
            window.removeEventListener("keydown", closePopIfEscaped)
        }
    }, [closeEditMode])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updatedSchedule({...editSchedule, name:updateSchedule});
    }
    

  return (
    <div 
        role="dialog" 
        aria-labelledby='editSchedule'
        onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
        <form className="todo"
        onSubmit={handleFormSubmit}
        >
        <div className="wrapper">
            <input 
                type="text" 
                id="editSchedule"
                className="input"
                value={updateSchedule}
                onInput={(e) => setUpdateSchedule(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder="Update Schedule"
            />
            <label 
                htmlFor="editSchedule"
                className="label"
            >Update Schedule</label>
        </div>
        <button
            className="btn"
            aria-label={updateSchedule}
            type="submit"
            >
            <CheckIcon strokeWidth={2} height={24} width={24} />
            </button>
        </form>
    </div>
  )
}

export default EditForm
