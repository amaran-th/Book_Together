import React from 'react'
import ReactDOM from 'react-dom'
import { Link, useParams } from 'react-router-dom'
//local

function Club() {
  return (
    <div className="border border-black rounded-lg px-2 py-5 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <p className="px-3 uppercase tracking-wider">북클럽</p>
        <Link to={`/mypage`} state={{ init: '북클럽' }}>
          <button className="border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium hover:bg-gray-50 hover:shadow-md focus:outline-none dark:hover:bg-gray-900">
            상세
          </button>
        </Link>
      </div>
      <div className="mt-3 space-y-2">ㅁㅁ</div>
    </div>
  )
}

export default Club
