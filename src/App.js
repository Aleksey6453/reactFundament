import React from 'react';
import './style/GlobalStyle.css'
import PostList from './components/post-list/PostList'
import FormCreatePost from './components/form_create_post/FormCreatePost';
import MyInput from './components/UI/input/MyInput';
import MyBtn from './components/UI/button/MyBtn';

function App() {
  const [posts, setPosts] = React.useState([
    {id:1, title:'Post', body:'Text about Post'},
    {id:2, title:'Post', body:'Text about Post'},
    {id:3, title:'Post', body:'Text about Post'},
  ])
  const [post, setPost] = React.useState({})
  const [makePost, setMakePost] = React.useState({title:'', body:''})
  // const [title, setTitle] = React.useState('')
  // const [body, setBody] = React.useState('')
  const addPost = (e) => {
      e.preventDefault()
      // const newPost = {
      //   id: Date.now(),
      //   title,
      //   body
      // }
    setPosts([...posts, {...post, id: Date.now()}])  
    setPost({title:'', body: ''})
  }

  return (
    <div className="App">
      <FormCreatePost posts={posts} 
                      setPosts={setPosts} 
                      makePost={makePost} 
                      setMakePost={setMakePost}
                      />
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
      <PostList posts={posts} title={'Fucking List of posts'} />
    </div>
  );
}

export default App;
