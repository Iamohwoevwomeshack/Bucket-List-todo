import styles from "./ScheduleItem.module.css"
import { CheckIcon } from "@heroicons/react/24/outline"
import { PencilIcon } from "@heroicons/react/24/outline"
import { TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"


const ScheduleItem = ({schedule, deleteSchedule, updateSchedule, enterEditMode}) => {

    const [isChecked, setIsChecked] = useState(schedule.checked)

    const handleChange = e => {
        setIsChecked(!isChecked)
        updateSchedule(schedule.id);
    }

  return (
    <li className={styles.task}>
        <div className={styles["task-group"]}>
            <input
                type="checkbox"
                checked={isChecked}
                className={styles.checkbox}
                onChange={handleChange}
                name={schedule.name}
                id={schedule.id}
            />
            <label 
                htmlFor={schedule.id}
                className={styles.label}
            >
                {schedule.name}
                <p className={styles.checkmark}>
                    <CheckIcon 
                        strokeWidth={2}
                        width={24}
                        height={24}
                    />
                </p>
            </label>
        </div>
        <div className={styles["task-group"]}>
            <button
                className="btn"
                aria-label={`Update ${schedule.name} Task`}
                onClick={() => enterEditMode(schedule)}
            >
            <PencilIcon 
                        width={24}
                        height={24}
                    />
            </button>

            <button
                className={`btn ${styles.delete}`}
                aria-label={`Delete ${schedule.name} Task`}
                onClick={() => deleteSchedule(schedule.id)}
            >
            <TrashIcon 
                        width={24}
                        height={24}
                    />
            </button>
        </div>
    </li>
  )
}

export default ScheduleItem