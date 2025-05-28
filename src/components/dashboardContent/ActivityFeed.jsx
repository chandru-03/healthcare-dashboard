import React from 'react'
import style from '../../styles/ActivityFeed.module.css'

function ActivityFeed() {

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const Bar = ({ height, color = 'gray', margin }) => (
    <div className={style.bar}
      style={{ height: height, backgroundColor: color, marginTop: margin }}></div>
  );

  const BarWrapper = ({ children, margin }) => (
    <div
      className={style.barWrapper}
      style={{ marginTop: margin }}>
      {children}
    </div>
 );

  return (
    <div className={style.activityContainer}>
      <div className={style.activityHeader}>
        <h3>Activity</h3>
        <p>3 appointments on this week</p>
      </div>

      <div className={style.chartBody}>

        <div>
          <div className={style.barContainer}>
            <Bar/>
            <Bar height={'50px'} color={'#31cfd9'}/>
            <BarWrapper margin={'1.5rem'}>
              <Bar height={'20px'} color={'gray'}/>
              <Bar height={'20px'} color={'gray'}/>
            </BarWrapper>
            <Bar height={'30px'} color={'gray'} margin={'3.5rem'}/>
          </div>
        </div>


        <div>
          <div className={style.barContainer}>
            <BarWrapper>
              <Bar height='40px' color='#31cfd9'/>
              <Bar height='40px' color='#424e8a'/>
            </BarWrapper>
            <Bar height={'50px'} color={'gray'}/>
            <BarWrapper margin={'1.5rem'}>
              <Bar height={'20px'} color={'gray'}/>
              <Bar height={'20px'} color={'gray'}/>
            </BarWrapper>
            <Bar height={'30px'} color={'gray'} margin={'3.5rem'}/>
          </div>
        </div>

        <div>
          <div className={style.barContainer}>
            <Bar/>
            <Bar height={'50px'}/>
            <BarWrapper margin={'1.5rem'}>
              <Bar height={'20px'} color='#31cfd9'/>
              <Bar height={'20px'} color='#424e8a'/>
            </BarWrapper>
            <Bar height={'30px'} color='#424e8a' margin={'3.5rem'}/>
            </div>
        </div>

        <div>
          <div className={style.barContainer}>
            <BarWrapper>
              <Bar height={'40px'} color='gray'/>
              <Bar height={'40px'} color='gray'/>
            </BarWrapper>
            <Bar height={'50px'} color='#31cfd9'/>
            <BarWrapper margin='1.5rem'>
              <Bar height={'20px'} color='#31cfd9' />
              <Bar height={'20px'} color='#424e8a'/>
            </BarWrapper>
            <Bar height={'30px'} color='gray' margin={'3.5rem'}/>
          </div>
        </div>

        <div >
          <div className={style.barContainer}>
            <Bar/>
            <Bar height={'50px'} color='#424e8a'/>
            <BarWrapper margin='1.5rem'>
              <Bar height='20px' color='gray'/>
              <Bar height='20px' color='gray'/>
            </BarWrapper>
            <Bar height='30px' color='gray' marginTop='3.5rem'/>
          </div>
        </div>

        <div>
          <div className={style.barContainer}>
            <BarWrapper>
              <Bar height='40px' color='#31cfd9'/>
              <Bar height='40px' color='#424e8a'/>
            </BarWrapper>
            <Bar height='50px' color='#31cfd9'/>
            <BarWrapper margin='1.5rem'>
              <Bar height='20px' color='gray'/>
              <Bar height='20px' color='gray'/>
            </BarWrapper>
            <Bar height='30px' color='#424e8a' margin='3.5rem'/>
          </div>
        </div>

        <div>
          <div className={style.barContainer}>
            <Bar/>
            <div className={style.bar} style={{ height: '50px', backgroundColor: 'gray' }}></div>
            <BarWrapper margin='1.5rem'>
              <Bar height='20px' color='#31cfd9'/>
              <Bar height='20px' color='#424e8a'/>
            </BarWrapper>
            <Bar height='30px' color='#424e8a' margin='3.5rem'/>
          </div>
        </div>

        <div>
          <div className={style.barContainer}>
            <div className={style.bar}></div>
            <Bar height='50px' color='#31cfd9'/>
            <BarWrapper margin='1.5rem'>
            <Bar height='20px' color='gray'/>
            <Bar height='20px' color='gray'/>
            </BarWrapper>
            <Bar height='30px' color='#424e8a' margin='3.5rem'/>
          </div>
        </div>



      </div>
      <div className={style.dayColumn}>
        {days.map((item, index) => (
          <p key={index} className={style.day}>{item}</p>
        ))
        }
      </div>
    </div>
  )
}

export default ActivityFeed