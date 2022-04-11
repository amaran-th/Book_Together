import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//redux
import { Provider } from 'react-redux'
import store from './redux/store'

//local
import './tailwind.css'
import App from './App'
import Example from './page/Main/Test'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
