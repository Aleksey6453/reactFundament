import React from 'react'
import PostItem from '../postItem/PostItem'
import styles from './PostList.module.css'
import {TransitionGroup, CSSTransition} from 'react-transition-group'


const PostList = ({posts, title, remove}) => {
  if (!posts.length){
      return(
        <div><h2> Were is empty now :( </h2>
          <br />
             <img src="/1.jpg" alt="photo" style={{width: '100%'}} key={22} classNames="item"/> 
          </div>
      )
  }

  return (
    <div className={styles.post_list}>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => 
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
                <PostItem remove={remove} number={index + 1} post={post}  />
            </CSSTransition>
        )}
      </TransitionGroup>
     
    </div>
  )
}

export default PostList
