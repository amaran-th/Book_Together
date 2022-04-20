//커스텀
import React from 'react'
import ReactDOM from 'react-dom'
import { Switch } from '@headlessui/react'
import { connect } from 'react-redux'
//local
import actionTheme from '../../../redux/action/theme'
import actionDarkMode from '../../../redux/action/darkMode'

const themes = ['lavender', 'olive', 'amaranth', 'hydrangea', 'freesia']
const getTheme = theme => {
  if (theme === 'lavender') return '라벤더'
  else if (theme === 'olive') return '올리브'
  else if (theme === 'amaranth') return '아마란스'
  else if (theme === 'hydrangea') return '수국'
  else if (theme === 'freesia') return '프리지아'
}

function Custom({ darkMode, theme, updateCurrent, darkModeToggle }) {
  //console.log(theme)
  return (
    <div className="min-h-[80vh] space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <div className="shadow sm:rounded-md sm:overflow-hidden dark:border dark:border-gray-700">
        <div className="py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium">커스텀</h3>
            <p className="mt-1 text-sm text-gray-500">화면을 꾸며보세요.</p>
          </div>
          <div className="mt-6 grid grid-cols-3 space-y-6">
            <div className="col-span-3 sm:col-span-2">
              <label className="block text-sm font-medium">컬러 테마</label>
              <div className="space-x-1">
                <span className="border inline-block bg-point h-5 w-5 rounded-full "></span>
                <span className="border inline-block bg-main h-5 w-5 rounded-full "></span>
                <span className="border inline-block bg-sub h-5 w-5 rounded-full "></span>
              </div>

              <div className="mt-1 py-1 md:flex md:justify-center border rounded-lg bg-gray-50 dark:bg-gray-900">
                {themes.map(item => (
                  <span key={item} className={item + '-theme'}>
                    <button
                      className={
                        (theme.theme === item
                          ? 'text-black bg-main dark:text-white'
                          : 'text-sub bg-white dark:bg-black hover:text-point hover:shadow-md') +
                        ' p-1 px-2 m-1 rounded-full border-2 border-main'
                      }
                      onClick={() => {
                        updateCurrent(item)
                      }}
                    >
                      {getTheme(item)}
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium">
                다크 모드 : <span className="hidden dark:inline-block">ON</span>
                <span className="dark:hidden inline-block">OFF</span>
              </label>

              <Switch
                checked={darkMode}
                onChange={() => darkModeToggle()}
                className="bg-gray-200 dark:bg-gray-700 relative inline-flex items-center mt-1 h-6 rounded-full w-11"
              >
                <span className="sr-only">Dark Mode</span>
                <span
                  className={
                    'translate-x-1 dark:translate-x-6 inline-block w-4 h-4 transform bg-main rounded-full'
                  }
                />
              </Switch>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Custom)
