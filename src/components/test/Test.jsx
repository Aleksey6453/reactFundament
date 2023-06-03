import React from 'react'
import PostList from '../post-list/PostList'
import FormCreatePost from '../form_create_post/FormCreatePost'

const Test = () => {
    const [posts, setPosts] = React.useState([
        {id:1, title:'Post 1', text:'Text about Post1'},
        {id:2, title:'Post 2', text:'Text about Post2'},
        {id:3, title:'Post 3', text:'Text about Post3'},
    ])
    
  return (
    <div className='test_wrap'>
        <FormCreatePost posts={posts} setPosts={setPosts}/>
        <PostList posts={posts} title={'List of posts'}/>
    </div>
  )
}

export default Test
