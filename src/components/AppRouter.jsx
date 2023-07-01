import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from '../pages/HomePages'
import AboutPages from '../pages/AboutPages'
import PostsPages from '../pages/PostsPages'
import PostIdPage from '../pages/PostIdPage'
import NotFoundPage from '../pages/NotFoundPage'
import Layout from '../pages/Layout'
import { SinglePage } from '../pages/SinglePage' 

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePages />} />
              <Route path='about' element={<AboutPages />} />
              <Route path='posts' element={<PostsPages />} />
              <Route path='posts/:id' element={<SinglePage />} />
              <Route path='posts/post' element={<PostIdPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    </div>
  )
}

export default AppRouter
