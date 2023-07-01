import React from 'react'
import { Outlet } from 'react-router-dom'
import AppRouter from '../components/AppRouter'
import Menu from '../components/menu/Menu'

const Layout = () => {
  return (
    <div>
      <header>
        <Menu />
      </header>

      <Outlet />
      
      <footer>
        <h4>
          Footer
        </h4>
      </footer>
    </div>
  )
}

export default Layout
