import { actionType } from '../actions/index.js'

const initState = {
  itm: 1,
}

const sideBarReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SIDE_BAR_ON_CLICK_ITEM:
      return {
        ...state,
        itm: state.itm + action.itm,
      }
    default:
      return state
  }
}

export default sideBarReducer
