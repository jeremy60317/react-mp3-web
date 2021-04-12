import { useState, useEffect } from 'react'
import moment from 'moment'

function when(hour) {
  // if (hour > 5 && hour < 11) return "早安";
  // else if (hour > 11 && hour < 17) return "午安";
  // else if ((hour > 17 && hour < 24) || hour < 5) return "晚安";
  // else return "Hi";

  switch (true) {
    case hour > 5 && hour < 11:
      return '早安'
    case hour > 11 && hour < 17:
      return '午安'
    case (hour > 17 && hour < 24) || hour < 5:
      return '晚安'
    default:
      return 'Hi'
  }
}

function useNowTime(is12Hour) {
  const time = () => moment().format(is12Hour ? 'A hh:mm:ss' : 'HH:mm:ss')
  const [now, setNow] = useState(time())
  const [nowHour, setNowHour] = useState(moment().hour())
  const [nowMin, setNowMin] = useState(moment().minute())
  const [nowSec, setNowSec] = useState(moment().second())
  const [whenTime, setWhenTime] = useState(when(nowHour))

  useEffect(() => {
    if (nowMin === 0) {
      console.log(`${now} update`)
      setWhenTime(when(nowHour))
    }
  }, [nowMin, nowHour, now])

  useEffect(() => {
    const t = setInterval(() => {
      setNow(time())
      setNowHour(moment().hour())
      setNowMin(moment().minute())
      setNowSec(moment().second())
    }, 1000)
    return () => clearInterval(t)
  }, [])

  return { now, nowHour, nowMin, nowSec, whenTime }
}

export default useNowTime
