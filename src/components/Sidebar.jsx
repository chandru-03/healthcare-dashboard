import React from 'react'
import { ArrowDownUp, CalendarDays, ChartLine, LayoutGrid, MessageCircleMore, Phone, Settings, SquarePlus } from 'lucide-react'
import style from '../styles/Sidebar.module.css'

function Sidebar() {
    const generalItems = [
        { icon: <LayoutGrid size={20}/>, label: 'Dashboard', active: true },
        { icon: <ArrowDownUp size={20}/>, label: 'History' },
        { icon: <CalendarDays size={20}/>, label: 'Calendar' },
        { icon: <SquarePlus size={20}/>, label: 'Appointments' },
        { icon: <ChartLine size={20}/>, label: 'Statics' },
    ];

    const settingsItems = [
        { icon: <MessageCircleMore size={20}/>, label: 'Chat' },
        { icon: <Phone size={20}/>, label: 'Support' },
    ];

    return (
        <div style={{ marginTop: '6rem' }}>

            {/* General */}
            <div className={style.sidebarContainer}>
                <p>General</p>
                <ul className={style.menuList}>
                    {generalItems.map((item, index) => (
                        <li
                            key={index}
                            className={`${style.menuItem} ${item.active ? style.active : ''}`} >
                            {item.icon}
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tools */}
            <div className={style.sidebarContainer}>
                <p>Tools</p>
                <ul className={style.menuList}>
                    {settingsItems.map((item, index) => (
                        <li
                            key={index}
                            className={`${style.menuItem} ${item.active ? style.active : ''}`}>
                            {item.icon}
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Setiings */}
            <div className={style.sidebarContainer}>
                <div className={style.menuItem} style={{marginTop: '10rem'}}>
                <Settings size={20}/>
                <span>Setting</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar