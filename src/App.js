import React from 'react';
import './style/GlobalStyle.css'
import PostList from './components/post-list/PostList'
import PostForm from './components/form_create_post/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyBtn from './components/UI/button/MyBtn';

function App() {
  const [posts, setPosts] = React.useState([
    {id:1, title:'Gost', body:'Text about Xxxx'},
    {id:2, title:'Fost', body:'Text about Pppp'},
    {id:3, title:'Rost', body:'Text about Aaaa'},
  ])

  const [filter, setFilter] = React.useState({sort:'', query:''})
  const [modal, setModal] = React.useState(false)

  const sortedPosts = React.useMemo(() => {
    console.log('func getSortPost happend!')
    if(filter.sort){
      return  [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;

  }, [filter.sort, posts])

  const sortedAndSearchedPosts = React.useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const [makePost, setMakePost] = React.useState({title:'', body:''})
  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
  }
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
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
