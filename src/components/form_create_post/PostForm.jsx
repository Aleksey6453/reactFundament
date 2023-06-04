import React from 'react'
import MyBtn from '../UI/button/MyBtn'
import MyInput from '../UI/input/MyInput'

const PostForm = ({create}) => {
    const [post, setPost] = React.useState({title: '', body: ''})

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        } 
        create(newPost)
        setPost({title: '', body: ''})
    }
  return (
    <form className='form'>
        <MyInput type='text'
                value={post.title} 
                onChange={(e) => {
                     setPost({...post, title: e.target.value})
                                }}
                placeholder='add post'/>
        <MyInput type='text'
                  value={post.body} 
                  onChange={(e) => {
                        setPost({...post, body: e.target.value})
                                  }}
                  placeholder='add text'/>
        <MyBtn onClick={addPost}>Create</MyBtn>
    </form>
  )
}

export default PostForm
