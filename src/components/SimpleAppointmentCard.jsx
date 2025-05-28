import React from 'react'
import schedules from '../data/schedule'
import style from '../styles/SimpleAppointment.module.css'

function SimpleAppointmentCard() {
  return (
    <div className={style.simpleScheduleContainer}>
         <div >
            <h3 className={style.header}>The Upcoming Schedule</h3>

            {schedules.map((item, index) => (
                <div key={index} className={style.schedule}>
                    <p className={style.scheduleHeader}>{item.title}</p>

                    <div className={style.container}>
                        {item.content.map((content, index) => (
                            <div key={index}>
                                <div className={style.content}>
                                    <div className={style.contentHeader}>
                                        <p>{content.title}</p>
                                        <span>{content.icon}</span>
                                    </div>
                                    <p className={style.contentTime}>{content.schedule}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SimpleAppointmentCard