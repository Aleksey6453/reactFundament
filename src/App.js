import React from 'react';
import './style/GlobalStyle.css'
import PostList from './components/post-list/PostList'
import FormCreatePost from './components/form_create_post/FormCreatePost';
import PostForm from './components/form_create_post/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/postFilter/PostFilter';

function App() {
  const [posts, setPosts] = React.useState([
    {id:1, title:'Gost', body:'Text about Xxxx'},
    {id:2, title:'Fost', body:'Text about Pppp'},
    {id:3, title:'Rost', body:'Text about Aaaa'},
  ])

  const [filter, setFilter] = React.useState({sort:'', query:''})

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
  }
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  // const sortPost = (sort) => {
  //   setSelectedSort(sort)
  //   console.log(sort)
  // }

  return (
    <div className="App">
      {/* <FormCreatePost posts={posts} 
                      setPosts={setPosts} 
                      makePost={makePost} 
                      setMakePost={setMakePost}
                      /> */}
      <PostForm create={createPost} />
      <hr style={{margin:'10px'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {sortedAndSearchedPosts.length
          ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Fucking List of posts'} />
          : <div><h2> Were is empty now :( </h2>
          <br />
          <img src="/7.jpg" alt="photo" style={{width: '100%'}}/>
          </div>
      }
    </div>
  );
}

export default App;
