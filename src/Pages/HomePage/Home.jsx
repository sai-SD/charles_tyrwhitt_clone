import { useState } from 'react'
import '../../App.css'
import Navbar from '../../components/Navbar'
import HomePage from './HomePage'
function Home({count}) {

  return (
    <>
    <div className={`${count === 1 ? 'slide-notvisible' : 'slide-visiblee'}`}>
    <HomePage ></HomePage>
    </div>
    </>
  )
}

export default Home
