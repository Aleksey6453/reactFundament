import React from 'react';
import './style/GlobalStyle.css'
import PostList from './components/post-list/PostList'
import FormCreatePost from './components/form_create_post/FormCreatePost';
import MyInput from './components/UI/input/MyInput';
import MyBtn from './components/UI/button/MyBtn';

function App() {
  const [posts, setPosts] = React.useState([
    {id:1, title:'Post 1', body:'Text about Post'},
    {id:2, title:'Post 2', body:'Text about Post'},
    {id:3, title:'Post 3', body:'Text about Post'},
  ])
  const [title, setTitle] = React.useState('')
  const [body, setBody] = React.useState('')
  const addPost = (e) => {
      e.preventDefault()
      const newPost = {
        id: Date.now(),
        title,
        body
      }
    setPosts([...posts, newPost])  
    console.log(newPost)
  }

  return (
    <div className="App">
      {/* <FormCreatePost /> */}
      <form className='form'>
        <MyInput type='text'
                value={title} 
                onChange={(e) => {setTitle(e.target.value)}}
                placeholder='add post'/>
        <MyInput type='text'
                  value={body} 
                  onChange={(e) => {setBody(e.target.value)}}
                  placeholder='add text'/>
        <MyBtn onClick={addPost}>Create</MyBtn>
      </form>
      <PostList posts={posts} title={'Fucking List of posts'} />
    </div>
  );
}

export default App;
