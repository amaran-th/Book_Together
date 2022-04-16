import React from 'react'
import ReactDOM from 'react-dom'
//local
import Content from './Contents/Content'
import Friend from './Side/Friend'
import Club from './Side/Club'
import Option from './Side/Option'

function Main() {
  return (
    <div className="max-w-3xl mx-auto sm:px-6 md:max-w-7xl md:px-8 md:grid md:grid-cols-12 md:gap-8">
      <div className="hidden md:block md:col-span-4 lg:col-span-3">
        <nav name="좌측 사이드바" className="sticky top-4 space-y-4 mt-4">
          <Friend />
          <Club />
        </nav>
      </div>
      <Content />
      <aside className="hidden xl:block xl:col-span-3">
        <section name="우측 사이드바" className="sticky top-4 space-y-4 mt-4">
          <Option />
        </section>
      </aside>
    </div>
  )
}

export default Main
