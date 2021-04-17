import styled, { css } from 'styled-components'

import { pxToRem } from '../../styleFunction'

const child_layout = css`
  padding-left: ${pxToRem(24)};
  padding-right: ${pxToRem(24)};
  margin-bottom: ${pxToRem(24)};
`
const LogoStyle = styled.div`
  ${child_layout}
  display: block;
  img {
    width: 100%;
  }
`
export { LogoStyle }
