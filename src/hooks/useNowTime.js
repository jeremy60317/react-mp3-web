import { useState, useEffect } from 'react'
import moment from 'moment'

const useNowTime = () => {
  const [now, setNow] = useState(moment().format('HH:mm:ss'))
  const [nowHour, setNowHour] = useState(moment().hour())
  const [nowMin, setNowMin] = useState(moment().minute())
  const [nowSec, setNowSec] = useState(moment().second())
  const [whenTime, setWhenTime] = useState('')

  const when = () => {
    if (nowHour > 5 && nowHour < 11) return '早安'
    else if (nowHour > 11 && nowHour < 17) return '午安'
    else if ((nowHour > 17 && nowHour < 24) || nowHour < 5) return '晚安'
    else return 'Hi'
  }

  useEffect(() => {
    const t = setInterval(() => {
      setNow(moment().format('HH:mm:ss'))
      setNowHour(moment().hour())
      setNowMin(moment().minute())
      setNowSec(moment().second())
      setWhenTime(when())
    }, 1000)
    return () => clearInterval(t)
  }, [])

  return { now, nowHour, nowMin, nowSec, whenTime }
}

export default useNowTime
