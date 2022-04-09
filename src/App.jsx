import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

//local
import Header from './shared/Header'
import Footer from './shared/Footer'
const Main = lazy(() => import('./page/Main/Main'))
const MyPage = lazy(() => import('./page/MyPage/MyPage'))
//const theme = 'lavender'
function App({ darkMode, theme }) {
  //console.log(theme)
  return (
    <>
      <div className={theme.theme + '-theme ' + (darkMode ? 'dark' : 'light')}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/my" element={<MyPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  )
}

const mapStateToProps = (state, OwnProps) => {
  return { darkMode: state.darkMode, theme: state.theme }
}

export default connect(mapStateToProps)(App)
