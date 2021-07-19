import styled, { css } from 'styled-components'
import { default_a_tag, defaultStyle, colorStyle } from '../../globalStyle.js'

import { pxToRem, bgLinearGradient } from '../../styleFunction'
const { background, font, color } = colorStyle
const MainTitleStyle = styled.div`
  height: auto;
  width: 100%;
  font-size: ${pxToRem(40)};
  padding: ${pxToRem(50)} 0 ${pxToRem(30)};
  color: ${font.white};
  position: relative;
  span {
    font-weight: bold;
    position: absolute;
    font-size: ${pxToRem(13)};
    top: ${pxToRem(10)};
    right: ${pxToRem(10)};
  }
`

export { MainTitleStyle }
