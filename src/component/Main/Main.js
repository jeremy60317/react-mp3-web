import React from 'react'
import useNowTime from '../../hooks/useNowTime'
import { MainWrapperStyle } from '../../styledComponent'

const Main = () => {
  const { now, nowHour, nowMin, nowSec, whenTime } = useNowTime()
  console.log('now', now)
  console.log('nowHour', nowHour)
  console.log('whenTime', whenTime)
  return (
    <MainWrapperStyle>
      <div>{`${whenTime}，${now}`}</div>
    </MainWrapperStyle>
  )
}

export default Main
