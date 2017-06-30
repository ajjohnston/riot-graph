import ReactDOM from 'react-dom'
import React from 'react'
import App from './app'

const element = document.getElementById('app-wrapper')

ReactDOM.render(React.createElement(App, {}), element)
