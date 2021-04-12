import React from 'react'
import useNowTime from '../../hooks/useNowTime'
import { MainWrapperStyle } from '../../styledComponent'

const Main = () => {
  const { now, nowHour, nowMin, nowSec, whenTime } = useNowTime()
  return (
    <MainWrapperStyle>
      <div>{`${whenTime}，${now}`}</div>
    </MainWrapperStyle>
  )
}

export default Main
