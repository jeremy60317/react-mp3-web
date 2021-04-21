import React from 'react'
import MainTitle from './MainTitle'
import { MainWrapperStyle, mainBackgroundColor } from '../../styleFunction'

const Main = ({ type, title, color }) => {
  const backgroundColor = mainBackgroundColor(color)
  return (
    <MainWrapperStyle bgc={backgroundColor}>
      <MainTitle title={title} />
    </MainWrapperStyle>
  )
}

export default Main
