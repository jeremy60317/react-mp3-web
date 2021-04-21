import { useState } from 'react'
import { songs, allAlbum } from '../song'
import { getRandomBackgroundColor } from '../tools/tools'

const sideBarReducer = {
  favorAlbumList: [],
}

const pageReducer = {
  type: '',
  title: '首頁',
  backgroundColor: '#03808b',
}

const initState = {
  sideBarReducer,
  pageReducer,
  songs: songs,
  allAlbum: allAlbum,
}

const useGlobalState = () => {
  const [globalState, setGlobalState] = useState(initState)
  const setOrgState = (partState) =>
    setGlobalState({ ...globalState, ...partState })
  const dispatch = (action) => {
    setOrgState(action)
  }
  const actions = {
    pageActions: {
      changePageType: ({ type = 'other', name = '其他' }) => {
        const obj = {}
        switch (type) {
          case 'index':
            obj.type = type
            obj.title = '首頁'
            obj.backgroundColor = '#03808b'
            break
          case 'allAlbum':
            obj.type = type
            obj.title = '所有專輯'
            obj.backgroundColor = '#671e8b'
            break
          default:
            obj.type = type
            obj.title = name
            obj.backgroundColor = getRandomBackgroundColor()
        }
        return {
          ...globalState,
          pageReducer: {
            ...globalState.pageReducer,
            ...obj,
          },
        }
      },
    },
    appActions: {},
  }
  return { globalState, dispatch, actions }
}
export default useGlobalState
