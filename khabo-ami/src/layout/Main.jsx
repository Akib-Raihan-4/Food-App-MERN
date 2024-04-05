import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css';

const Main = () => {
  return (
    <div className='h-[10000px]'>
      <Navbar/>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  )
}

export default Main
