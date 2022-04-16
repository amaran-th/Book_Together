import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

//local
import Header from './shared/Header'
import Footer from './shared/Footer'
const Init = lazy(() => import('./page/Init/Init'))
const SignUp = lazy(() => import('./page/SignUp/SignUp'))
const Main = lazy(() => import('./page/Main/Main'))
const MyPage = lazy(() => import('./page/MyPage/MyPage'))
//const theme = 'lavender'
function App({ darkMode, theme }) {
  //console.log(theme)
  return (
    <>
      <div className={theme.theme + '-theme ' + (darkMode ? 'dark' : 'light')}>
        <div className="dark:text-white dark:bg-black">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Init />} />
              <Route path="/main" element={<Main />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state, OwnProps) => {
  return { darkMode: state.darkMode, theme: state.theme }
}

export default connect(mapStateToProps)(App)
