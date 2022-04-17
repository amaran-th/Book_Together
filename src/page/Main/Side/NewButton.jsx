import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { PencilIcon } from '@heroicons/react/outline'
//local

function NewButton() {
  const navigate = useNavigate()
  return (
    <button
      className="w-full border-2 border-main rounded-full px-2 py-3 text-black text-xl bg-sub hover:shadow-md dark:border-gray-700"
      onClick={() => navigate(`/write`)}
    >
      <PencilIcon className="inline-block h-7 w-7 m-1 text-main" />새 포스팅
      작성하기
    </button>
  )
}

export default NewButton
