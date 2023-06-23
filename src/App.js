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
import Pagination from './components/UI/pagination/Pagination';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutPages from './pages/AboutPages';
import PostsPages from './pages/PostsPages';
import HomePages from './pages/HomePages';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/about' element={<AboutPages />} />
        <Route path='/posts' element={<PostsPages />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
