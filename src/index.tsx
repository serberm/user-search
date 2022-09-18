import 'react-hot-loader'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import GithubProvider from './context'
import App from './App'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <GithubProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GithubProvider>,
  document.getElementById('wrapper')
)
