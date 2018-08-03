import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import { Home, Survey, Dashboard, NotFound } from '@/pages'

export const App = hot(module)(() => (
  <Switch>
    <Route exact={true} path='/' component={Home} />
    <Route path='/survey' component={Survey} />
    <Route path='/dashboard' component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
  )
)
