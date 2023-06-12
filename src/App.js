import React from 'react';
import './style/GlobalStyle.css'
import PostList from './components/post-list/PostList'
import PostForm from './components/form_create_post/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyBtn from './components/UI/button/MyBtn';
import { usePosts } from './hooks/usePosts';
import axios from 'axios'


function App() {
  const [posts, setPosts] = React.useState([])

  const [filter, setFilter] = React.useState({sort:'', query:''})
  const [modal, setModal] = React.useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [makePost, setMakePost] = React.useState({title:'', body:''})
  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
  }
  async function fetchPost(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(22)
    setPosts(response.data)
  }
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <button className='btn' onClick={fetchPost}>get post</button>
      <MyBtn onClick={()=>setModal(true)}>
        Open modal
      </MyBtn>
      <MyModal visible={modal} setVisible={setModal}>
         <PostForm create={createPost} />
      </MyModal>
      
      <hr style={{margin:'10px'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Fucking List of posts'} />
    </div>
  );
}

export default App;
