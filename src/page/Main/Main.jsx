import React from 'react'
import ReactDOM from 'react-dom'
//local
import Content from './Contents/Content'
import Friend from './Side/Friend'
import Club from './Side/Club'
import Option from './Side/Option'
import NewButton from './Side/NewButton'

function Main() {
  return (
    <div className="max-w-3xl mx-auto sm:px-6 md:max-w-7xl md:px-8 md:grid md:grid-cols-12 md:gap-8">
      <div className="hidden md:block md:col-span-4 lg:col-span-3">
        <nav name="좌측 사이드바" className="sticky top-4 space-y-4 mt-4">
          <Friend />
          <Club />
        </nav>
      </div>
      <div
        name="메인 컨텐츠"
        className="border-4 md:col-span-8 lg:col-span-8 xl:col-span-6"
      >
        <Content />
      </div>
      <aside className="hidden xl:block xl:col-span-3">
        <section name="우측 사이드바" className="sticky top-4 space-y-4 mt-4">
          <NewButton />
          <Option />
        </section>
      </aside>
    </div>
  )
}

export default Main
