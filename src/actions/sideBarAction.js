import { actionType } from './index.js'

export const sideBarOnClickItem = (itm) => {
  console.log('itm', itm)
  return {
    type: actionType.SIDE_BAR_ON_CLICK_ITEM,
    itm,
  }
}
