import styled, { css } from 'styled-components'
import {
  GlobalStyle,
  GlobalWrapper,
  default_a_tag,
  defaultStyle,
  colorStyle,
} from './globalStyle'
//function
//px轉rem
//原理：先設 default-px 為 16px , html tag 的 font-size 吃 default-px 這個變數 , 換算出 rem
//範例：24px = 24 / 16 = 1.5rem
const pxToRem = (px) => {
  return `${(px / defaultStyle['px']) * 1}rem`
}

const bgLinearGradient = ({
  startColor = 'white',
  endColor = 'black',
  start = 0,
  end = 100,
}) => {
  return css`
    background: linear-gradient(
      to bottom,
      ${startColor} ${start}%,
      ${endColor} ${end}%
    );
  `
}

const mainBackgroundColor = (color) => {
  return {
    startColor: color,
    endColor: colorStyle.background.mainBlack,
    end: 40,
  }
}

const MainWrapperStyle = styled.div`
  div {
    outline: 1px solid red;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 ${pxToRem(30)};
  ${(props) => props.bgc && bgLinearGradient(props.bgc)}
`

export { pxToRem, bgLinearGradient, MainWrapperStyle, mainBackgroundColor }
