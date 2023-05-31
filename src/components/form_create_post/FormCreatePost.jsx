import React from 'react'
import styles from './FormCreatePost.module.css'

const FormCreatePost = () => {
  return (
    <div className={styles.wrap}>
        <input type="text" placeholder='title of post' />
        <input type="text" placeholder='text about post' />
        <button className='btn'>Create post</button>
      
    </div>
  )
}

export default FormCreatePost
