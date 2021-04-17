import React from 'react'
import useNowTime from '../../hooks/useNowTime'
import { MainTitleStyle } from './MainStyle'
import { colorStyle } from '../../globalStyle'
import {
  MainWrapperStyle,
  bgLinearGradient,
  pxToRem,
} from '../../styleFunction'

const { background, font, color } = colorStyle

const Main = () => {
  const { now, nowHour, nowMin, nowSec, whenTime } = useNowTime()
  const backgroundColor = {
    startColor: 'white',
    endColor: background.mainBlack,
  }
  return (
    <MainWrapperStyle bgc={backgroundColor}>
      <MainTitleStyle>{`${whenTime}，${now}`}</MainTitleStyle>
    </MainWrapperStyle>
  )
}

export default Main
