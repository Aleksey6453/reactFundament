import React from 'react';
import './style/GlobalStyle.css'
import PostList from './components/post-list/PostList'
import FormCreatePost from './components/form_create_post/FormCreatePost';
import PostForm from './components/form_create_post/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = React.useState([
    {id:1, title:'Post', body:'Text about Post'},
    {id:2, title:'Post', body:'Text about Post'},
    {id:3, title:'Post', body:'Text about Post'},
  ])

  const [selectedSort, setSelectedSort] = React.useState('')
  const [makePost, setMakePost] = React.useState({title:'', body:''})
  const createPost = (newPost) => {
      setPosts([...posts, newPost])
  }
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
    console.log(sort)
  }

  return (
    <div className="App">
      {/* <FormCreatePost posts={posts} 
                      setPosts={setPosts} 
                      makePost={makePost} 
                      setMakePost={setMakePost}
                      /> */}
      <PostForm create={createPost} />
      <hr style={{margin:'10px'}}/>
      <div>
        <MySelect 
          value={selectedSort}
          onChange={sortPost}
          defaultValue='sort by'
          options={[
            {value: 'title', name: 'by title'},
            {value: 'body', name: 'by description'}
          ]}
        />
      </div>
      {posts.length
          ? <PostList remove={removePost} posts={posts} title={'Fucking List of posts'} />
          : <div><h2> Were is empty now :( </h2>
          <br />
          <img src="/1.jpg" alt="photo" style={{width: '100%'}}/>
          </div>
      }
    </div>
  );
}

export default App;
