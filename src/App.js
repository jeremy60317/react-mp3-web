import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ContextStore from './context/contextStore'

import useGlobalState from './hooks/useGlobalState'
import SideBar from './component/SideBar/SideBar'
import Main from './component/Main/Main'
import AlbumMain from './component/AlbumMain/AlbumMain'
import MediaPlayer from './component/MediaPlayer/MediaPlayer'
import { GlobalStyle, GlobalWrapper } from './globalStyle'

const App = () => {
  const initState = useGlobalState()
  const { globalState, dispatch, actions } = initState
  console.log('globalState', globalState)
  return (
    <Router>
      <GlobalStyle />
      <ContextStore.Provider
        value={{
          indexState: globalState,
          dispatch,
          actions,
        }}
      >
        <GlobalWrapper>
          <SideBar />
          {/* <MediaPlayer state={state} /> */}
          <Switch>
            <Router exact path="/">
              <Main />
              {/* <div>Home</div> */}
            </Router>
            <Router path="/album">
              <AlbumMain />
              {/* <div>album</div> */}
            </Router>
            <Router path="/song">
              <div>song</div>
            </Router>
          </Switch>
        </GlobalWrapper>
      </ContextStore.Provider>
    </Router>
  )
}

export { ContextStore }
export default App
