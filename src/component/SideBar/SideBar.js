import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Routers from '../../routers'
import Logo from '../Logo/Logo'

import ContextStore from '../../context/contextStore'

import logoSvg from '../../static/svg/logo_s.svg'
import homeSvgDefault from '../../static/svg/icon-home-default.svg'
import homeSvgFocus from '../../static/svg/icon-home-focus.svg'
import searchSvgDefault from '../../static/svg/icon-search-default.svg'
import searchSvgFocus from '../../static/svg/icon-search-focus.svg'
import librarySvgDefault from '../../static/svg/icon-my-library-default.svg'
import librarySvgFocus from '../../static/svg/icon-my-library-focus.svg'

import './SideBar.scss'
import { RemoveCircleOutlineRounded } from '@material-ui/icons'

const Album = (props) => {
  const { indexState, setIndexState } = useContext(ContextStore)
  const { album } = indexState
  console.log('albumIndexState', indexState)
  return (
    <ul className="sideBarAlbumList">
      <li>
        <Link>
          <span>所有專輯</span>
        </Link>
      </li>
      {album.map((itm, idx) => {
        return (
          <li key={itm.name}>
            <Link>
              <span>{itm.name}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const SideBarTitleList = () => {
  return (
    <ul className="sideBarTitleList">
      <li>
        <Link to={Routers.home}>
          <div className="iconBox">
            <img src={homeSvgDefault} />
          </div>
          <span>首頁</span>
        </Link>
      </li>
      <li>
        <Link to={Routers.album}>
          <div className="iconBox">
            <img src={searchSvgDefault} />
          </div>
          <span>瀏覽</span>
        </Link>
      </li>
      <li>
        <Link to="/song">
          <div className="iconBox">
            <img src={librarySvgDefault} />
          </div>
          <span>電台</span>
        </Link>
      </li>
    </ul>
  )
}

const Border = () => <div className="sideBorder"></div>

const SideBar = () => {
  const { indexState, setIndexState } = useContext(ContextStore)
  console.log('indexState', indexState)
  return (
    <div className="wrapper">
      <Logo logo={logoSvg} cssClass="logo" />
      <SideBarTitleList />
      <Border />
      <Album />
    </div>
  )
}

export default SideBar
