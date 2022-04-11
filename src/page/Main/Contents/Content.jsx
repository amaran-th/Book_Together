import React from 'react'
import ReactDOM from 'react-dom'
//local
import Post from './Post'
import { posts } from '../TestData'

function Content() {
  return (
    <div
      name="메인 컨텐츠"
      className="border-4 md:col-span-8 lg:col-span-8 xl:col-span-6"
    >
      <div className="text-3xl">OO님의 책장</div>
      <div className="w-full space-y-4">
        {posts?.map(post => (
          <Post post={post} />
        ))}
      </div>
    </div>
  )
}

export default Content
