import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'

const Layout = ({ setSearchTerm }) => {
  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <Outlet/>
    </div>
  )
}

export default Layout