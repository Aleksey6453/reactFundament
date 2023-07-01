import React from 'react';
import '../style/GlobalStyle.css'
import PostList from '../components/post-list/PostList'
import PostForm from '../components/form_create_post/PostForm';
import PostFilter from '../components/postFilter/PostFilter';
import MyModal from '../components/UI/myModal/MyModal';
import MyBtn from '../components/UI/button/MyBtn';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount} from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';



function PostsPages() {
  const [posts, setPosts] = React.useState([])

  const [filter, setFilter] = React.useState({sort:'', query:''})
  const [modal, setModal] = React.useState(false)

  const [totalPages, setTotalPages] = React.useState(0)
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPost, postLoading, postError] = useFetching(async(limit, page)=>{
    const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = (response.headers['x-total-count'])
      setTotalPages(getPageCount(totalCount, limit))
  })

  console.log(totalPages)
  React.useEffect(()=> {
    fetchPost(limit, page)
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
    fetchPost(limit, page)
  }


  return (
    <div className="App">
      <button className='btn ml_10' onClick={fetchPost}>get post</button>
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

      <Pagination page={page} 
                  totalPages={totalPages} 
                  changePage={changePage}
                   />
      
    </div>
  );
}

export default PostsPages;
