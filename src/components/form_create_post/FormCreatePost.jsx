import React from 'react'
import MyBtn from '../UI/button/MyBtn'
import MyInput from '../UI/input/MyInput'
import styles from './FormCreatePost.module.css'



const FormCreatePost = ({posts, setPosts}) => {
    // const [posts, setPosts] = React.useState([
    //     {id:1, title:'Post 1', text:'Text about Post1'},
    //     {id:2, title:'Post 2', text:'Text about Post2'},
    //     {id:3, title:'Post 3', text:'Text about Post3'},
    // ])
    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')
    const bodyInpurRef = React.useRef()
    // const addNewPost = (e) => {
    //     e.preventDefault()
    //     console.log(title, body)
    //     // console.log(bodyInpurRef.current.value)
    // }
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        console.log(newPost)
        setPosts({...posts, newPost})
    }
  return (
    <form className={styles.wrap}>
        {/* <input type="text" placeholder='title of post...' /> */}
        {/* <input type="text" placeholder='text about post...' /> */}
        {/* <button className='btn'>Create post</button> */}
        {/* <input ref={bodyInpurRef} 
                type="text" 
                placeholder='text about post...' /> */}
        <MyInput onChange={e => setTitle(e.target.value)}
                 type="text" 
                 value={title}
                 placeholder='title of post...' 
                 />
        <MyInput onChange={e => setBody(e.target.value)}
                 type="text" 
                 value={body}
                 placeholder='body of post...' 
                 />
        {/* <MyInput ref={bodyInpurRef}
                type="text" 
                placeholder='text about post...'
                 /> */}
        <MyBtn>C</MyBtn>
    
    </form>
  )
}

export default FormCreatePost
