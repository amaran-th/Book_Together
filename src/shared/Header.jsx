import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
//local

function Header({}) {
  return (
    <div className="border-4 border-black bg-sub text-main">
      <div className="flex justify-between">
        <span className="text-center text-4xl">[로고]</span>
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
