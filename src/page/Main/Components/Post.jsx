import React from 'react'
import ReactDOM from 'react-dom'
//local
import Card from './Card'
function Post({ post }) {
  console.log(post)
  return (
    <div className="border-4 border-black max-w-[30em]">
      <span className="text-2xl">{post.title}</span>
      <span className="text-base italic">by{post.author}</span>
      <p>
        {post.keywords?.map(keyword => (
          <span className="inline-block border border-gray-300 min-w-[4em] py-1 px-2 m-[1px] text-sm text-center rounded-full">
            #{keyword}
          </span>
        ))}
      </p>
      <Card postId={post.postId} cardN={post.cardN} />
      <p className="text-sub">
        {post.grade
          ? [...Array(5).keys()].map(key => {
              if (key < post.grade) return '★'
              else return '☆'
            })
          : ''}
      </p>
      <p>{post.review ? post.review : ''}</p>
    </div>
  )
}

export default Post
