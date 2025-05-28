import React from 'react'
import style from '../styles/DashboardMainContent.module.css'
import { ChevronDown } from 'lucide-react'
import CalendarView from './dashboardContent/CalendarView'
import ActivityFeed from './dashboardContent/ActivityFeed'
import UpcomingSchedule from './dashboardContent/UpcomingSchedule'
import SimpleAppointmentCard from './SimpleAppointmentCard'
import DashboardOverview from './dashboardContent/DashboardOverview'

function DashboardMainContent() {
    return (
        <div className={style.divider}>

            <div className={style.dashboardContainer}>

                <div className={style.dashboardHeader}>
                    <h2>Dashboard</h2>

                    <span>
                        This Week
                        <ChevronDown color='#cecfda' size={18} />
                    </span>
                </div>

                <div className={style.dashboardSection}>

                    <DashboardOverview/>
                    <ActivityFeed />

                </div>

            </div>

            <div className={style.scheduleContainer}>
                <CalendarView />
                <UpcomingSchedule />
                <SimpleAppointmentCard />
            </div>
        </div>
    )
}

export default DashboardMainContent