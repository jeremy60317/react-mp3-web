import {
  GlobalStyle,
  GlobalWrapper,
  default_a_tag,
  fontColor,
  color,
  backgroundColor,
  defaultStyle,
} from './globalStyle'
//function
//px轉rem
//原理：先設 default-px 為 16px , html tag 的 font-size 吃 default-px 這個變數 , 換算出 rem
//範例：24px = 24 / 16 = 1.5rem
const pxToRem = (px) => {
  return `${(px / defaultStyle['px']) * 1}rem`
}

export { pxToRem }
