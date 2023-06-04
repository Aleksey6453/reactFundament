import React from 'react'
import MyBtn from '../UI/button/MyBtn'
import MyInput from '../UI/input/MyInput'
import styles from './FormCreatePost.module.css'

const FormCreatePost = ({posts, setPosts, makePost, setMakePost}) => {
    // const [makePost, setMakePost] = React.useState({title:'', body:''})
    // const [title, setTitle] = React.useState('')
    // const [body, setBody] = React.useState('')
    const bodyInputRef = React.useRef()
    // const addNewPost = (e) => {
    //     e.preventDefault()
    //     console.log(title, body)
    //     // console.log(bodyInputRef.current.value)
    // }
    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...makePost, id: Date.now()}])
        setMakePost({title:'', body:''})
      
    }
  return (
    <form className={styles.wrap}>
        {/* <input type="text" placeholder='title of post...' /> */}
        {/* <input type="text" placeholder='text about post...' /> */}
        {/* <button className='btn'>Create post</button> */}
        {/* <input ref={bodyInpurRef} 
                type="text" 
                placeholder='text about post...' /> */}
        <MyInput onChange={e => {setMakePost({...makePost, title: e.target.value})}}
                 type="text" 
                 value={makePost.title}
                 placeholder='title of post...' 
                 />
        <MyInput onChange={e => {setMakePost({...makePost, body: e.target.value})}}
                 type="text" 
                 value={makePost.body}
                 placeholder='body of post...' 
                 />
        {/* <MyInput ref={bodyInpurRef}
                type="text" 
                placeholder='text about post...'
                 /> */}
        <MyBtn onClick={addNewPost}>Make</MyBtn>
    
    </form>
  )
}

export default FormCreatePost
