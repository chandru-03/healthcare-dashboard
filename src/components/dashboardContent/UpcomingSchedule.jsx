import React from 'react'
import appointments from '../../data/appointments'
import style from '../../styles/UpcomingSchedule.module.css'

function UpcomingSchedule() {
    return (
        <div className={style.scheduleContainer}>
            {appointments.map((item, index) => (
                <div key={index} className={`${style.appointments} ${item.active ? style.active : ''}`}>
                    <div>
                        <p>{item.name}</p>
                        <p>{item.icon}</p>
                    </div>
                    <span>{item.time}</span>
                    <span>{item.doctor}</span>
                </div>
            ))}
        </div>
    )
}

export default UpcomingSchedule