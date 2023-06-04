import React from 'react'
import PostItem from '../postItem/PostItem'
import styles from './PostList.module.css'


const PostList = ({posts, title, remove}) => {
  return (
    <div className={styles.post_list}>
      <h1>{title}</h1>
      {posts.map((post, index) => 
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
      )}
    </div>
  )
}

export default PostList
