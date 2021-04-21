import React from 'react'
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
  const {
    globalState,
    globalState: { pageReducer },
    dispatch,
    actions,
  } = initState
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
            <Route exact path="/">
              <Main
                type={pageReducer.type}
                title={pageReducer.title}
                color={pageReducer.backgroundColor}
              />
            </Route>
            {/* <Route path="/allAlbum">
              <Main
                type={pageReducer.type}
                title={pageReducer.title}
                color={pageReducer.backgroundColor}
              />
            </Route> */}
            <Route path="/:id">
              <Main
                type={pageReducer.type}
                title={pageReducer.title}
                color={pageReducer.backgroundColor}
              />
            </Route>
          </Switch>
        </GlobalWrapper>
      </ContextStore.Provider>
    </Router>
  )
}

export { ContextStore }
export default App
