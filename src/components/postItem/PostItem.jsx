import React from 'react'
import styles from './PostItem.module.css'

const PostItem = (props) => {
 
  return (
       <div className={styles.post}>
            <div className={styles.half_left_post}>
                <h2>{props.number}.{props.post.title}{props.number}</h2>
                <p>{props.post.body}{props.number}</p>
            </div>
            <div className={styles.half_right_post}>
                <button className='btn'>Del</button>
            </div>
      </div>
  )
}

export default PostItem
