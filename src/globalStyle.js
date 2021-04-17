import styled, { createGlobalStyle, css } from 'styled-components'

const defaultStyle = {
  px: 16,
  mainTitle: 40,
}

const colorStyle = {
  background: {
    mainBlack: '#131313',
    black: '#000',
  },
  font: {
    white: '#fff',
  },
  color: {
    black: '#000',
  },
}

const default_a_tag = css`
  text-decoration: none;
  color: ${colorStyle.font.white};
`

const GlobalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: ${defaultStyle['px']}px;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .globalWrapper {
    width: 100%;
    height: 100vh;
    display: flex;
  }
`

export {
  GlobalStyle,
  GlobalWrapper,
  default_a_tag,
  // fontColor,
  // color,
  // backgroundColor,
  defaultStyle,
  colorStyle,
}
