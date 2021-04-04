import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ContextStore from './context/contextStore'
import { songs, album } from './song'

import SideBar from './component/SideBar/SideBar'
import MediaPlayer from './component/MediaPlayer/MediaPlayer'

import './App.scss'

const initState = {
  songs: songs,
  album: album,
}

const App = () => {
  const [state, setState] = useState(initState)
  const setIndexState = (receiveState) =>
    setState({ ...state, ...receiveState })
  console.log('test')
  return (
    <Router>
      <div className="App">
        <ContextStore.Provider
          value={{
            indexState: state,
            setIndexState,
          }}
        >
          <div className="globalWrapper">
            <SideBar />
            {/* <MediaPlayer state={state} /> */}
            <Switch>
              <Router exact path="/">
                <div>Home</div>
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
