import React from 'react'
import ReactDOM from 'react-dom'
//local
import Post from './Components/Post'
import { posts } from './TestData'

function Main() {
  return (
    <div className="border-4 border-black min-h-screen">
      <p className="">test</p>
      {posts?.map(post => (
        <Post post={post} />
      ))}
    </div>
  )
}

export default Main
