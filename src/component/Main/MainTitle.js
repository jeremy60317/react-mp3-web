import React from 'react'
import useNowTime from '../../hooks/useNowTime'
import { MainTitleStyle } from './MainStyle'

const MainTitle = ({ title }) => {
  const { now, nowHour, nowMin, nowSec, whenTime } = useNowTime()
  return (
    <MainTitleStyle>
      <span>{`${whenTime}，${now}`}</span>
      <h1>{title}</h1>
    </MainTitleStyle>
  )
}

export default MainTitle
