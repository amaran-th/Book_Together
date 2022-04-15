import React, { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { Switch } from '@headlessui/react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
//local

function Header({ open }) {
  const navigate = useNavigate()
  //open은 모바일의 메뉴 창이 열려있는지 여부
  return (
    <div
      className={
        (open ? 'fixed w-full z-40' : '') +
        ' border-4 border-black text-main bg-sub p-2'
      }
    >
      <div className="flex justify-between">
        <button
          onClick={() => navigate(`/main`)}
          className="text-center text-4xl"
        >
          [로고]
          <span className="xl:hidden">xl </span>
          <span className="lg:hidden">lg </span>
          <span className="md:hidden">md </span>
          <span className="sm:hidden">sm </span>
        </button>
        <span>
          <button
            onClick={() => navigate(`/mypage`)}
            className="border border-main h-full flex items-center justify-end inset-y-0 rounded-md px-1 hover:shadow-md"
          >
            <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-8 w-8 m-2">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <div className="text-sm">
              <strong>아마란스</strong>
              <p>@songsy405 </p>
            </div>
          </button>
        </span>
      </div>
    </div>
  )
}

export default Header
