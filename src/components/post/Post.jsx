import React from 'react'


const Post = (props) => {
 
  return (
       <div className='post'>
            <div className='half_left_post'>
                <h2>{props.post.title}</h2>
                <p>{props.post.text}</p>
            </div>
            <div className='half_right_post'>
                <button className='btn'>Del</button>
            </div>
      </div>
  )
}

export default Post
