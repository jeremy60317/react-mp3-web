import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Album from '../Album/Album'

import logoSvg from '../../static/svg/logo_Spotify.svg'
import homeSvgDefault from '../../static/svg/icon-home-default.svg'
import homeSvgFocus from '../../static/svg/icon-home-focus.svg'
import searchSvgDefault from '../../static/svg/icon-search-default.svg'
import searchSvgFocus from '../../static/svg/icon-search-focus.svg'
import librarySvgDefault from '../../static/svg/icon-my-library-default.svg'
import librarySvgFocus from '../../static/svg/icon-my-library-focus.svg'

import './SideBar.scss'

const SideBarTitleList = () => {
    return (
        <div className="sideBarTitleList">
            <ul>
                <li>
                    <Link to="/">
                        <div className="iconBox">
                            <img src={homeSvgDefault} />
                        </div>
                        <span>首頁</span>
                    </Link>
                </li>
                <li>
                    <Link to="/album">
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
        </div>
    )
}

const SideBar = () => {
    return (
        <div className="wrapper">
            <Logo logo={logoSvg} href={null} cssClass="logo" />
            <SideBarTitleList />
            <Album />
        </div>
    )
}

export default SideBar
