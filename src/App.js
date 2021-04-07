import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ContextStore from './context/contextStore'
import { songs, album } from './song'

import useGlobalState from './hooks/useGlobalState'
import SideBar from './component/SideBar/SideBar'
import Main from './component/Main/Main'
import MediaPlayer from './component/MediaPlayer/MediaPlayer'

import './App.scss'

const MainBackground = styled.div`
  background: red;
`

const App = () => {
  const initState = useGlobalState()
  const { globalState, dispatch, actions } = initState
  return (
    <Router>
      <div className="App">
        <ContextStore.Provider
          value={{
            indexState: globalState,
            dispatch,
            actions,
          }}
        >
          <div className="globalWrapper">
            <SideBar />
            {/* <MediaPlayer state={state} /> */}
            <Switch>
              <Router exact path="/">
                <Main />
                {/* <div>Home</div> */}
              </Router>
              <Router path="/album">
                <div>album</div>
              </Router>
              <Router path="/song">
                <div>song</div>
              </Router>
            </Switch>
          </div>
        </ContextStore.Provider>
      </div>
    </Router>
  )
}

export default App
