import React, { useState } from 'react'

import ContextStore from './context/contextStore'
import { songs } from './song'

import SideBar from './component/SideBar/SideBar'
import MediaPlayer from './component/MediaPlayer/MediaPlayer'

import './App.scss'

const initState = {
    songs: songs,
}

const App = () => {
    const [state, setState] = useState(initState)
    const setContextState = (receiveState) => setState({ ...state, ...receiveState })

    return (
        <div className="App">
            <ContextStore.Provider
                value={{
                    contextState: state,
                    setContextState,
                }}
            >
                <div className="globalWrapper">
                    <SideBar />
                    {/* <MediaPlayer state={state} /> */}
                </div>
            </ContextStore.Provider>
        </div>
    )
}

export default App
