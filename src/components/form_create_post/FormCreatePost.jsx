import React from 'react'
import MyBtn from '../UI/button/MyBtn'
import MyInput from '../UI/input/MyInput'
import styles from './FormCreatePost.module.css'

const FormCreatePost = () => {
    const [title, setTitle] = React.useState('')
    const bodyInpurRef = React.useRef()
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInpurRef.current.value)
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
        <MyInput ref={bodyInpurRef}
                type="text" 
                placeholder='text about post...'
                 />
        <MyBtn type='submit' onClick={addNewPost}>Create</MyBtn>
    
    </form>
  )
}

export default FormCreatePost
