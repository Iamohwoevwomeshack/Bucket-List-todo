import ScheduleItem from "./ScheduleItem"

// styles
import styles from "./ScheduleList.module.css"

const ScheduleList = ({schedules, deleteSchedule, updateSchedule, enterEditMode}) => {
  return (
    <ul className={styles.schedules}>
      {schedules.sort((a, b) => b.id - a.id).map(schedule => (
        <ScheduleItem
            key={schedule.id}
            schedule={schedule}
            deleteSchedule={deleteSchedule}
            updateSchedule={updateSchedule}
            enterEditMode={enterEditMode}
        />
      ))
      }
    </ul>
  )
}

export default ScheduleList

