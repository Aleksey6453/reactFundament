import React from 'react'
import Post from '../post/Post'
import styles from './PostList.module.css'


const PostList = ({posts, title}) => {
  return (
    <div className={styles.post_list}>
        <h1>{title}</h1>
        {posts.map(post =>
            <Post post={post} key={post.id} />
        )}
    </div>
  )
}

export default PostList
