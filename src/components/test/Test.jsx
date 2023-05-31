import React from 'react'
import PostList from '../post-list/PostList'


const Test = () => {
    const [posts, setPosts] = React.useState([
        {id:1, title:'Post 1', text:'Text about Post1'},
        {id:2, title:'Post 2', text:'Text about Post2'},
        {id:3, title:'Post 3', text:'Text about Post3'},

    ])
    
  return (
    <div className='test_wrap'>
      
        <PostList posts={posts}/>

    </div>
  )
}

export default Test
