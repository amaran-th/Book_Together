//로그인되어있지 않은 상태일 때 나타날 화면
import React, { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
//local

function SignUp() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center">
      <form className="border shadow-lg rounded-lg p-3 m-3">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-4">
            <div>
              <h3 className="text-2xl leading-6 font-bold text-main">
                정보 입력
              </h3>
              <p className="mt-1 text-sm text-sub">
                회원등록에 필요한 정보를 기입해주세요.
              </p>
            </div>
            <div className="mt-6 space-y-6">
              <div className="">
                <label className="block text-sm font-medium">닉네임</label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-sub rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main focus:border-main sm:text-sm dark:bg-black"
                  />
                </div>
              </div>

              <div className="">
                <label className="block text-sm font-medium">
                  아이디(친구코드로 사용됩니다)
                  <div className="inline-block rounded-lg bg-gray-100 pb-1 px-2 mx-2 text-sm text-main">
                    <input
                      type="checkbox"
                      disabled
                      className="h-3 w-3 mr-1 text-main border-sub rounded focus:ring-main"
                    />
                    중복확인
                  </div>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-sub rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main focus:border-main sm:text-sm dark:bg-black"
                  />
                </div>
              </div>
              <div className="">
                <label className="block text-sm font-medium">이메일 주소</label>
                <div className="mt-1 sm:flex">
                  <input
                    type="email"
                    required
                    className="appearance-none w-full sm:mb-0 mb-3 px-3 py-2 border border-sub rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main focus:border-main sm:text-sm dark:bg-black"
                  />
                  <button className="sm:ml-3 sm:w-[12em] w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-main hover:bg-point focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main">
                    인증번호 전송
                  </button>
                </div>
              </div>

              <div className="">
                <label className="block text-sm font-medium">비밀번호</label>
                <div className="mt-1">
                  <input
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-sub rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main focus:border-main sm:text-sm dark:bg-black"
                  />
                </div>
              </div>
              <div className="">
                <label className="block text-sm font-medium">
                  비밀번호 확인
                  <input
                    type="checkbox"
                    disabled
                    className="h-4 w-4 mx-1 text-main border-sub rounded focus:ring-main"
                  />
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-sub rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main focus:border-main sm:text-sm dark:bg-black"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-2xl leading-6 font-bold text-main">
                개인정보 수집 동의
              </h3>
              <p className="mt-1 text-sm text-sub">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>
            </div>
            <div className="mt-6">
              <fieldset>
                <legend className="text-base font-medium">By Email</legend>
                <div className="mt-4 space-y-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        Comments
                      </label>
                      <p className="text-gray-500">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-700"
                      >
                        Candidates
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Offers
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    Push Notifications
                  </legend>
                  <p className="text-sm text-gray-500">
                    These are delivered via SMS to your mobile phone.
                  </p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-everything"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-email"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              이전 페이지로
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-main hover:bg-point focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
            >
              회원가입
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp
