import React from 'react'
import MyBtn from '../UI/button/MyBtn'
import styles from './PostItem.module.css'
// import {useHistory} from 'react-router-dom'

const PostItem = (props) => {
    // const router = useHistory()
    // console.log(params)
    const titleUpper = props.post.title.charAt(0).toUpperCase() + props.post.title.slice(1)
    const bodyUpper = props.post.body.charAt(0).toUpperCase() + props.post.body.slice(1)

  return (
       <div className={styles.post}>
            <div className={styles.half_left_post}>
                <h2><b>{props.post.id}.</b>{titleUpper}</h2>
                <p>{bodyUpper}</p>
            </div>
            <div className={styles.half_right_post}>
                <MyBtn onClick={() => props.remove(props.post)}>Del</MyBtn>
                <MyBtn onClick={() => {alert('More')}}>More</MyBtn>
            </div>
      </div>
  )
}

export default PostItem
