import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
 
  return (
       <div className={styles.post}>
            <div className={styles.half_left_post}>
                <h2>{props.post.id}.{props.post.title}</h2>
                <p>{props.post.text}</p>
            </div>
            <div className={styles.half_right_post}>
                <button className='btn'>Del</button>
            </div>
      </div>
  )
}

export default Post
