import React from 'react';
import './style/GlobalStyle.css'
import PostList from './components/post-list/PostList'
import FormCreatePost from './components/form_create_post/FormCreatePost';
import MyInput from './components/UI/input/MyInput';
import MyBtn from './components/UI/button/MyBtn';
import PostForm from './components/form_create_post/PostForm';

function App() {
  const [posts, setPosts] = React.useState([
    {id:1, title:'Post', body:'Text about Post'},
    {id:2, title:'Post', body:'Text about Post'},
    {id:3, title:'Post', body:'Text about Post'},
  ])
 
  const [makePost, setMakePost] = React.useState({title:'', body:''})
  const createPost = (newPost) => {
      setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      {/* <FormCreatePost posts={posts} 
                      setPosts={setPosts} 
                      makePost={makePost} 
                      setMakePost={setMakePost}
                      /> */}
      <PostForm create={createPost} />
      <PostList posts={posts} title={'Fucking List of posts'} />
    </div>
  );
}

export default App;
