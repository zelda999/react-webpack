import React from 'react'

import './styles.css'
import LOGO from './react.png'
import SVG from './rf-logo.svg'

import { ClickCounter } from './ClickCounter'

const App = () => {
  return (
    <>
      <h1>
        helloReact Webpack {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={LOGO} alt="" />
      <img src={SVG} alt="" />
      <ClickCounter />
    </>
  )
}

export default App
