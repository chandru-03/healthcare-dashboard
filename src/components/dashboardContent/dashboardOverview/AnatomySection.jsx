import React from 'react'
import style from '../../../styles/AnatomySection.module.css'
import anatomy from '../../../assets/anatomy.png'
import Scanner from '../../../assets/Scanner.png'
import { ZoomIn, RotateCw} from 'lucide-react'


function AnatomySection() {
  return (
    <div className={style.anatomyContainer}>
      <div className={style.anatomy}>

        <img className={style.anatomyImage} src={anatomy} alt="Human Anatomy" />
        <ZoomIn className={style.zoomIcon} />

        <div className={style.rotationContainer}>

          <svg viewBox="0 0 300 30">
            <path
              style={{ fill: '#808995' }}
              d="M0,0c49.66,7.83,99.65,15.25,150.02,15.28,18.86-.06,37.71-.92,56.51-2.52,18.7-1.66,37.64-3.93,56.15-6.95C275.17,4.2,287.61,2.29,300,0c-12.18,3.27-24.54,5.85-36.92,8.27-62.26,10.17-125.92,12.53-188.6,4.82-12.53-1.43-25.04-3.13-37.5-5.08C25,5.68,11.79,3.03,0,0h0Z" />
          </svg>


          <div className={style.rotateIcon}>
            <RotateCw size={10} color='#d2dae3' />
          </div>
        </div>

        <div className={style.heartIndicator}>
          <img src={Scanner} alt="Scanner" />
          <span>❤️ Healthy Heart</span>
        </div>

        <div className={style.legIndicator}>
          <span>🦵🏻 Healthy Leg</span>
          <img src={Scanner} alt="Scanner" />
        </div>

      </div>
    </div>
  )
}

export default AnatomySection