import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
//local
import actionTheme from '../redux/action/theme'
import actionDarkMode from '../redux/action/darkMode'
const themes = ['lavender', 'olive', 'amaranth']
const getTheme = theme => {
  if (theme === 'lavender') return '라벤더'
  else if (theme === 'olive') return '올리브'
  else if (theme === 'amaranth') return '아마란스'
}
function Header({ darkMode, theme, updateCurrent, darkModeToggle }) {
  console.log(darkMode)
  return (
    <div className="border-4 border-black bg-point text-sub">
      <p className="text-center text-4xl">Header</p>
      <div
        name="컬러테마 선택"
        className="m-2 border-2 flex justify-end items-center"
      >
        {themes.map(item => (
          <span key={item} className={item + '-theme'}>
            <button
              className={
                (theme.theme === item
                  ? 'text-black bg-sub'
                  : 'text-sub bg-white') + ' p-1 m-1 rounded-lg'
              }
              onClick={() => {
                updateCurrent(item)
              }}
            >
              {getTheme(item)}
            </button>
          </span>
        ))}
        <Switch
          checked={darkMode}
          onChange={() => darkModeToggle()}
          className="bg-gray-200 dark:bg-black relative inline-flex items-center h-6 rounded-full w-11"
        >
          <span className="sr-only">Dark Mode</span>
          <span
            className={
              'translate-x-1 dark:translate-x-6 inline-block w-4 h-4 transform bg-point rounded-full'
            }
          />
        </Switch>
      </div>
    </div>
  )
}
const mapStateToProps = (state, OwnProps) => {
  return { darkMode: state.darkMode, theme: state.theme }
}
const mapDispatchToProps = (dispatch, OwnProps) => {
  return {
    updateCurrent: theme => {
      dispatch(actionTheme.updateCurrent(theme))
    },
    darkModeToggle: () => {
      dispatch(actionDarkMode.toggle())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
