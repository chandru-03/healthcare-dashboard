import React from 'react'
import AnatomySection from './dashboardOverview/AnatomySection'
import HealthStatusCards from './dashboardOverview/HealthStatusCards'
import style from '../../styles/DashboardOverview.module.css'

function DashboardOverview() {
  return (
    <div className={style.dashboard}>
      <AnatomySection />
      <HealthStatusCards />
    </div>
  )
}

export default DashboardOverview