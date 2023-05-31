import React from 'react'
import Post from '../post/Post'


const PostList = ({posts}) => {
  return (
    <div className='post_list'>
        <h1>List of posts</h1>
        {posts.map(post =>
            <Post post={post} key={post.id} />
        )}
    </div>
  )
}

export default PostList
