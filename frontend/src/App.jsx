import React from 'react'
import HeroSection from './components/HeroSection'
import NewFeedSection from './components/NewsFeedSection/NewsFeedSection'
import BlogPostCategories from './components/BlogPostCategories'

export default function App() {
  return (
    <div className=''>
      <HeroSection />
      <NewFeedSection />
      <BlogPostCategories />
    </div>
  )
}
