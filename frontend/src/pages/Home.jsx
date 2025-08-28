import React from 'react'
import Charts from '../components/Charts'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SideBar from '../components/SideBar'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <SideBar />
    </div>
  )
}

export default Home