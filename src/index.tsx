import './style/theme.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from '@/components'
import { BrowserRouter } from 'react-router-dom'

import 'normalize.css'

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'))
