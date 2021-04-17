import styled, { css } from 'styled-components'
import { default_a_tag, colorStyle } from '../../globalStyle.js'
import { pxToRem } from '../../styleFunction'
const { background, font, color } = colorStyle

const child_layout = css`
  padding-left: ${pxToRem(24)};
  padding-right: ${pxToRem(24)};
  margin-bottom: ${pxToRem(24)};
`
const padding_left_right = css`
  padding-left: ${pxToRem(24)};
  padding-right: ${pxToRem(24)};
`
const margin_bottom = css`
  margin-bottom: ${pxToRem(24)};
`

const SideBarWrapperStyle = styled.div`
  background: ${background.black};
  width: ${pxToRem(230)};
  height: 100%;
  padding-top: ${pxToRem(24)};
  box-sizing: border-box;
`

const sideBarAlbumListStyle = css`
  height: 45%;
  overflow-y: scroll;
  li {
    height: ${pxToRem(32)};
  }
`

const SideBarListStyle = styled.ul`
  ${child_layout}
  ${font.white};
  li {
    display: flex;
    align-items: center;
    height: ${pxToRem(40)};
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    ${default_a_tag}
  }
  .iconBox {
    width: ${pxToRem(24)};
    margin-right: ${pxToRem(12)};
  }
  img {
    height: ${pxToRem(24)};
    margin-right: ${pxToRem(12)};
  }
  ${(props) => (props.type === 'album' ? sideBarAlbumListStyle : '')}
`

const SideBarBorder = styled.div`
  margin: ${pxToRem(24)};
  height: 1px;
  background-color: #fff;
`

export { SideBarWrapperStyle, SideBarListStyle, SideBarBorder }
