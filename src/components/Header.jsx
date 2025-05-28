import React from 'react'
import style from '../styles/Header.module.css'
import { Search, Bell, Plus } from 'lucide-react'
import avatar from '../assets/avatar.png'


function Header() {
  return (
    <div className={style.HeaderContainer}>

        <div className={style.logo}>
            <span className={style.logoPrimary}>Health</span>
            <span className={style.logoSecondary}>care.</span>
        </div>

        <div className={style.searchContainer}>
            <Search className={style.searchIcon} size={20}/>
            <input className={style.searchInput} type="text" placeholder='Search' />
            <Bell className={style.bellIcon} size={20}/>
        </div>
        
        <div className={style.panelRight}>
           <div className={style.avatar}>
            <img src={avatar} alt="Avatar" />
           </div>

           <div className={style.plusButton}>
            <Plus color='#fff' size={20}/>
           </div>
        </div>

    </div>
  )
}

export default Header