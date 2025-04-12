import React from 'react'
import FirstNavbar from './components/FirstNavbar'
import HeroSection from './components/HeroSection'
import NewFeedSection from './components/newsFeedSectio/NewsFeedSection'

export default function App() {
  return (
    <div className=''>
      {/* <FirstNavbar></FirstNavbar> */}
      <HeroSection/>
      <NewFeedSection/>
    </div>
  )
}
