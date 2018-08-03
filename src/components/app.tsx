import * as React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import * as backgroundImg from '@/assets/background.jpg'

import { Home, Survey, Dashboard, NotFound } from '@/pages'

const Wrapper = styled.div`
  background-image: url(${backgroundImg});
  min-height: 100vh;
`

export const App = hot(module)(() => (
    <Wrapper>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/survey' component={Survey} />
        <Route path='/dashboard' component={Dashboard} />
        <Route component={NotFound}/>
      </Switch>
    </Wrapper>
  )
)
