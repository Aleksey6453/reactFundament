import React from 'react'
import styles from './PostItem.module.css'

const PostItem = (props) => {
 
  return (
       <div className={styles.post}>
            <div className={styles.half_left_post}>
                <h2>{props.post.id}.{props.post.title}</h2>
                <p>{props.post.body}{props.post.id}</p>
            </div>
            <div className={styles.half_right_post}>
                <button className='btn'>Del</button>
            </div>
      </div>
  )
}

export default PostItem
