import { useState } from 'react'
import { songs, album } from '../song'

const appReducer = {}

const initState = {
  songs: songs,
  album: album,
}

const useGlobalState = () => {
  const [globalState, setGlobalState] = useState(initState)
  const setOrgState = (partState) =>
    setGlobalState({ ...globalState, ...partState })
  const dispatch = (action) => {
    setOrgState(action)
  }
  const actions = {
    appActions: {},
  }
  return { globalState, dispatch, actions }
}
export default useGlobalState
