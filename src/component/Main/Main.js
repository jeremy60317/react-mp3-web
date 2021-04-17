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
    startColor: '#03808b',
    endColor: background.mainBlack,
    end: 40,
  }
  return (
    <MainWrapperStyle bgc={backgroundColor}>
      <MainTitleStyle>
        <h1>首頁</h1>
        {`${whenTime}，${now}`}
      </MainTitleStyle>
    </MainWrapperStyle>
  )
}

export default Main
