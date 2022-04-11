import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
//local

function Header({ open }) {
  //open은 모바일의 메뉴 창이 열려있는지 여부
  return (
    <div
      className={
        (open ? 'fixed w-full z-40' : '') +
        ' border-4 border-black bg-sub text-main'
      }
    >
      <div className="flex justify-between">
        <span className="text-center text-4xl">
          [로고]
          <span className="xl:hidden">xl </span>
          <span className="lg:hidden">lg </span>
          <span className="md:hidden">md </span>
          <span className="sm:hidden">sm </span>
        </span>
        <span>
          <div className="flex items-center justify-end inset-y-0">
            <button className="inline-flex items-center m-1 px-4 py-2 border border-gray-500 text-base font-medium rounded-md text-black bg-white hover:text-main hover:border-main">
              로그인
            </button>
            <button className="inline-flex items-center m-1 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-main hover:bg-point">
              회원가입
            </button>
          </div>
        </span>
      </div>
    </div>
  )
}

export default Header
