import React from 'react'
import Feed from '../components/Feed'
import Navbar from '../components/Navbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-9 h-screen">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home
