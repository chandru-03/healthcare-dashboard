import React from 'react'
import style from '../../styles/CalendarView.module.css'
import { MoveLeft, MoveRight } from 'lucide-react';
import calendar from '../../data/calendar';

function CalendarView() {



    return (
        <div className={style.calendarContainer}>
            <div className={style.calendarHeader}>
                <h3>October 2021</h3>
                <div>
                    <MoveLeft />
                    <MoveRight />
                </div>
            </div>
            <div className={style.calendarBody}>

                {calendar.map((item, index) => (
                    <div key={index} className={`${style.calendar} ${item.active ? style.active : ''} ${item.dimmed ? style.dimmed : ''}`}>
                        <p className={style.day}>{item.day}</p>
                        <span className={style.date}>{item.date}</span>


                        <div className={style.timeSlots}>
                            {item.time.map((time, index) => (
                                <p
                                    className={ `${time.highlighted ? style.highlighted : ''} ${time.dotted ? style.dotted : ''}`}
                                    key={index}>
                                    {time.value}
                                </p>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarView