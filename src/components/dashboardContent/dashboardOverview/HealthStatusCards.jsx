import React from 'react'
import style from '../../../styles/HealthStatusCards.module.css'
import items from '../../../data/healthData'
import { ArrowRight } from 'lucide-react'

function HealthStatusCards() {
  return (
    <div className={style.healthStatusContainer}>
        {items.map((item, index) => (
          <div className={style.healthStatusCard} key={index}>

            <div className={style.info}>

              <div className={style.statusHeader}>

              <span className={style.icon}>{item.icon}</span>
              <h4 >{item.name}</h4>

              </div>

              <span className={style.date}>Date: {item.date}</span>
              
              <div className={style.progressBar}>
                <div 
                className={style.progress}
                style={{width: `${item.progress}%`, backgroundColor: `${item.color}`}}>
                    
                </div>
              </div>
            </div>

          </div>
        ))}

        <span className={style.details}>
          Details 
          <ArrowRight size={14}/>
          </span>
    </div>
  )
}

export default HealthStatusCards