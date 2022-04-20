import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const SubHeader = ({ head }) => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center shadow-md mb-2 p-2 dark:border-b dark:border-gray-700">
      <button
        className="inline-flex items-center m-1 px-2 py-2 border border-gray-500 text-sm rounded-md hover:text-main hover:border-main hover:shadow-md"
        onClick={() => navigate(-1)}
      >
        {'<'}이전 페이지로
      </button>
      <span className="text-2xl">{head ? head : ''}</span>
    </div>
  )
}
export default SubHeader
