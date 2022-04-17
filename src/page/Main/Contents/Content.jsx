import React from 'react'
import ReactDOM from 'react-dom'
//local
import Post from './Post'
import { posts } from '../TestData'

function Content() {
  return (
    <>
      <div className="text-3xl">OO님의 책장</div>
      <div className="w-full space-y-4">
        {posts?.map(post => (
          <Post post={post} />
        ))}
      </div>
    </>
  )
}

export default Content
