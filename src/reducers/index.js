import { combineReducers } from 'redux'
import sideBarReducer from './sideBarReducer'
//記得import reducer

// const iMusicApp = combineReducers({reducer的名字})
const iMusicApp = combineReducers({ sideBarReducer })

export default iMusicApp
