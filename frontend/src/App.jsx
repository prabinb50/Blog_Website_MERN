import React from 'react'
import FirstNavbar from './components/FirstNavbar'
import HeroSection from './components/HeroSection'
import NewFeedSection from './components/NewsFeedSection/NewsFeedSection'
import BlogPostCategories from './components/BlogPostCategories'

export default function App() {
  return (
    <div className=''>
      {/* <FirstNavbar></FirstNavbar> */}
      <HeroSection/>
      <NewFeedSection/>
      <BlogPostCategories/>
    </div>
  )
}
