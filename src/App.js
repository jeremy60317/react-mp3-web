import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { API_GET_DATA } from './global/constants'

import ContextStore from './context/contextStore'

// import useGlobalState from './hooks/useGlobalState'
import SideBar from './component/SideBar/SideBar'
import Main from './component/Main/Main'
import AlbumMain from './component/AlbumMain/AlbumMain'
import MediaPlayer from './component/MediaPlayer/MediaPlayer'
import { GlobalStyle, GlobalWrapper } from './globalStyle'

// async function fetchData() {
//   const res = await fetch(API_GET_DATA)
//   const data = await res.json()
//   console.log('data', data)
// }

const App = () => {
  // useEffect(() => {
  //   fetchData()
  // }, [])
  return (
    <Router>
      <GlobalStyle />
      <GlobalWrapper>
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Main type="index" title="首頁" color="#03808b" />
          </Route>
          <Route path="/allAlbum">
            <Main type="allAlbum" title="所有專輯" color="#671e8b" />
          </Route>
          {/* <Route path="/:id">
              <Main
                type={pageReducer.type}
                title={pageReducer.title}
                color={pageReducer.backgroundColor}
              />
            </Route> */}
        </Switch>
      </GlobalWrapper>
    </Router>
  )
}

export { ContextStore }
export default App
