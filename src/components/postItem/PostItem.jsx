import React from 'react'
import MyBtn from '../UI/button/MyBtn'
import styles from './PostItem.module.css'

const PostItem = (props) => {

  return (
       <div className={styles.post}>
            <div className={styles.half_left_post}>
                <h2><b>{props.post.id}.</b>{props.post.title.charAt(0).toUpperCase() + props.post.title.slice(1)}</h2>
                <p>{props.post.body}{props.number}</p>
            </div>
            <div className={styles.half_right_post}>
                <MyBtn onClick={() => props.remove(props.post)}>Del</MyBtn>
            </div>
      </div>
  )
}

export default PostItem
