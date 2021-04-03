import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Routers from '../../routers'

const Logo = (props) => {
  const { logo, cssClass } = props
  return (
    <Link className={cssClass} to={Routers.home}>
      <img src={logo} />
    </Link>
  )
}

export default Logo
