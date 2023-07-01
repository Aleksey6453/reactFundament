import React from 'react'
import styles from './Menu.module.css'
import {NavLink} from 'react-router-dom'



const Menu = () => {
  return (
    <div className={styles.wrap}>
        <NavLink className={styles.link} style={({isActive})=>({color: isActive ? 'white' : '#611A8B'})} to="/">Home</NavLink>
        <NavLink className={styles.link} style={({isActive})=>({color: isActive ? 'white' : '#611A8B'})} to="/about">About</NavLink>
        <NavLink className={styles.link} style={({isActive})=>({color: isActive ? 'white' : '#611A8B'})} to="/posts">Posts</NavLink>
    </div>
  )
}

export default Menu
