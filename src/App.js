import React from 'react';
import './style/GlobalStyle.css'
import PostList from './components/post-list/PostList'
import PostForm from './components/form_create_post/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyBtn from './components/UI/button/MyBtn';
import { usePosts } from './hooks/usePosts';
import axios from 'axios'
import PostService from './API/PostService';
import Loader from './components/UI/loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';


function App() {
  const [posts, setPosts] = React.useState([])

  const [filter, setFilter] = React.useState({sort:'', query:''})
  const [modal, setModal] = React.useState(false)

  const [totalPages, setTotalPages] = React.useState(0)
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  let pageArray = getPagesArray(totalPages)
  console.log([pageArray])

  const [fetchPost, postLoading, postError] = useFetching(async()=>{
    const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = (response.headers['x-total-count'])
      setTotalPages(getPageCount(totalCount, limit))
  })

  console.log(totalPages)
  React.useEffect(()=> {
    fetchPost()
  }, [])

  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
  }
 
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPost()
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
      {postError &&
          <h2>This is error! ${postError}</h2>
      }
      {
        postLoading
          ?  <div className='center'> <Loader /> </div>
          :  <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Fucking List of posts'} />
      }
      <div className='pagination'>
        {
          pageArray.map(p => 
            <button key = {p}
                    onClick= {()=> changePage(p)} 
                    className={page === p ?
                      'btn page_current' :
                      'btn'
             }>{p}</button>
            )
        }
      </div>
      
     
    </div>
  );
}

export default App;
