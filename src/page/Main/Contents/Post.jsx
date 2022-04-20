import React from 'react'
import ReactDOM from 'react-dom'
//local
import Card from './Card'
function Post({ post }) {
  //console.log(post)
  return (
    <div className="border-y  rounded-lg p-3 my-5 shadow-md hover:shadow-lg">
      <span className="font-title text-2xl">{post.title}</span>
      <span className="text-base italic">by{post.author}</span>
      <p className="my-1">
        {post.keywords?.map(keyword => (
          <span className="inline-block border-2 border-sub min-w-[4em] py-1 px-2 m-[1px] font-bold text-sm text-center text-main bg-white rounded-full dark:bg-main dark:text-white">
            #{keyword}
          </span>
        ))}
      </p>
      <Card postId={post.postId} cardN={post.cardN} />
      <div className="mt-3">
        <p className="text-sub">
          {post.grade
            ? [...Array(5).keys()].map(key => {
                if (key < post.grade) return '★'
                else return '☆'
              })
            : ''}
        </p>
        <p className="mx-2">{post.review ? post.review : ''}</p>
      </div>
    </div>
  )
}

export default Post
