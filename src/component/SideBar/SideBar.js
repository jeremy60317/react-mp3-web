import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as action from '../../actions/sideBarAction'
import Routers from '../../routers'
import Logo from '../Logo/Logo'

import logoSvg from '../../static/svg/iMusicLogo.svg'
import homeSvgDefault from '../../static/svg/icon-home-default.svg'
import homeSvgFocus from '../../static/svg/icon-home-focus.svg'
import searchSvgDefault from '../../static/svg/icon-search-default.svg'
import searchSvgFocus from '../../static/svg/icon-search-focus.svg'
import librarySvgDefault from '../../static/svg/icon-my-library-default.svg'
import librarySvgFocus from '../../static/svg/icon-my-library-focus.svg'

import {
  SideBarWrapperStyle,
  SideBarListStyle,
  SideBarBorder,
} from './SideBarStyle'
import sideBarReducer from '../../reducers/sideBarReducer'

// import './SideBar.scss'

const Album = (props) => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.sideBarReducer)
  console.log('store', store)
  const onClickLi = () => {
    dispatch(action.sideBarOnClickItem(1))
  }
  return (
    <SideBarListStyle type="albumList">
      <div style={{ color: 'white' }}>{store.itm}</div>
      <li onClick={onClickLi}>
        <Link to={Routers.allAlbum}>
          <span>我的收藏</span>
        </Link>
      </li>
      {/* {allAlbum.map((itm, idx) => {
        return (
          <li key={itm.name}>
            <Link
              to={`/${itm.key}`}
              onClick={() =>
                dispatch(
                  actions.pageActions.changePageType({
                    type: itm.key,
                    name: itm.name,
                  })
                )
              }
            >
              <span>{itm.name}</span>
            </Link>
          </li>
        )
      })} */}
      {/* </ul> */}
    </SideBarListStyle>
  )
}

const SideBarTitleList = () => {
  return (
    <SideBarListStyle>
      <li>
        <Link to={Routers.main}>
          <div className="iconBox">
            <img src={homeSvgDefault} />
          </div>
          <span>首頁</span>
        </Link>
      </li>
      <li>
        <Link to={Routers.allAlbum}>
          <div className="iconBox">
            <img src={librarySvgDefault} />
          </div>
          <span>所有專輯</span>
        </Link>
      </li>
      {/* <li>
        <Link to="/song">
          <div className="iconBox">
            <img src={librarySvgDefault} />
          </div>
          <span>電台</span>
        </Link>
      </li> */}
    </SideBarListStyle>
  )
}

const Border = () => <SideBarBorder />

const SideBar = () => {
  // const { indexState, actions, dispatch } = useContext(ContextStore)
  // console.log('useContext', useContext(ContextStore))
  // console.log('indexState', indexState)
  return (
    <SideBarWrapperStyle>
      <Logo logo={logoSvg} />
      <SideBarTitleList />
      <Border />
      <Album />
    </SideBarWrapperStyle>
  )
}

export default SideBar
