import React from 'react'
import ReactDOM from 'react-dom'
import Horizontable from './Horizontable'
import { Link, useParams } from 'react-router-dom'
//local

function Friend() {
  const items = [
    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  ]
  return (
    <div className="border border-black rounded-lg px-2 py-5 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <p className="px-3 uppercase tracking-wider">친구</p>
        <Link to={`/mypage`} state={{ init: '친구' }}>
          <button className="border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium hover:bg-gray-50 hover:shadow-md focus:outline-none dark:hover:bg-gray-900">
            상세
          </button>
        </Link>
      </div>
      <div className="border border-main rounded-lg bg-sub px-1 mt-3 ">
        <Horizontable>
          <div className="flex my-2 space-x-2">
            {items?.map(url => (
              <>
                {console.log(url)}

                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src={url}
                  alt=""
                  onClick={() => console.log('test' + url)}
                />
              </>
            ))}
          </div>
        </Horizontable>
      </div>
    </div>
  )
}

export default Friend
