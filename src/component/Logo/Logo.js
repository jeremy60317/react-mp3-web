import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Routers from '../../routers'

import { LogoStyle } from './LogoStyle'

const Logo = (props) => {
  const { logo } = props
  return (
    <Link to={Routers.home}>
      <LogoStyle>
        <img src={logo} />
      </LogoStyle>
    </Link>
  )
}

export default Logo
