import React from 'react'
import ReactDOM from 'react-dom'
//local
import Post from './Contents/Post'
import { posts } from './TestData'

function Main() {
  return (
    <>
      <div className="flex justify-center border-4 border-black min-h-screen dark:bg-black dark:text-white">
        <div className="border-4 w-[50em]">
          <p className="text-3xl">OO님의 책장</p>
          <div className="flex justify-center ">
            <div className="w-full sm:w-[80%]">
              {posts?.map(post => (
                <Post post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
