import React from 'react'
import Header from '../../components/header/Header'
import { Breadcrumbs } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <Outlet/>
    </div>
  )
}

export default Layout