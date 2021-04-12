import styled from 'styled-components'

const albumMainBackGroundColor = '#c7dfdf'
const bgLinearGradient = (color) =>
  ` background:linear-gradient(to bottom,${color} 0%, black 50%);`

export const MainWrapperStyle = styled.div`
  width: 100%;
  background: ${bgLinearGradient()};
  display: flex;
`
export const AlbumMainWrapperStyle = styled.div`
  width: 100%;
  ${(props) => bgLinearGradient(props.bgc)};
  display: flex;
`
