import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useLocation } from 'react-router-dom'
//local
import SubHeader from '../../shared/SubHeader'
import Profile from './Profile/Profile'
import Account from './Account/Account'
import Custom from './Custom/Custom'
import Friend from './Friend/Friend'
import BookClub from './BookClub/BookClub'
import {
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from '@heroicons/react/outline'

const navigation = [
  { name: '프로필', href: '#', icon: UserCircleIcon },
  { name: '계정', href: '#', icon: KeyIcon },
  { name: '커스텀', href: '#', icon: CreditCardIcon },
  { name: '친구', href: '#', icon: UserGroupIcon },
  { name: '북클럽', href: '#', icon: ViewGridAddIcon },
]
const getComponent = current => {
  //console.log(current)
  if (current === '프로필') return <Profile />
  else if (current === '계정') return <Account />
  else if (current === '커스텀') return <Custom />
  else if (current === '친구') return <Friend />
  else if (current === '북클럽') return <BookClub />
}

function MyPage() {
  const [current, setCurrent] = useState()
  const location = useLocation()
  useEffect(() => {
    //console.log('reload mypage')
    if (location.state) setCurrent(location.state.init)
    else setCurrent('프로필')
  }, [])
  return (
    <>
      <SubHeader head={'마이 페이지'} />
      <div className="max-w-3xl mx-auto md:max-w-7xl sm:px-6 md:px-8 lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside
          name="좌측 사이드바"
          className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"
        >
          <nav className="sticky top-4 space-y-1">
            {navigation.map(item => (
              <button
                key={item.name}
                onClick={() => setCurrent(item.name)}
                className={
                  (item.name === current
                    ? 'bg-gray-50 text-main hover:text-point dark:bg-gray-900'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-900') +
                  ' group rounded-md px-3 py-2 flex w-full items-center text-sm font-medium'
                }
                aria-current={item.name === current ? 'page' : undefined}
              >
                <item.icon
                  className={
                    (item.name === current
                      ? 'text-main group-hover:text-point'
                      : 'text-gray-400 group-hover:text-gray-500') +
                    ' flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                  }
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </button>
            ))}
          </nav>
        </aside>
        {getComponent(current)}
      </div>
    </>
  )
}

export default MyPage
