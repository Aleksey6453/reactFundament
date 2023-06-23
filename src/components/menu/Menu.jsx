import React from 'react'
import styles from './Menu.module.css'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className={styles.wrap}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/about">About</Link>
        <Link className={styles.link} to="/posts">Posts</Link>
    </div>
  )
}

export default Menu
