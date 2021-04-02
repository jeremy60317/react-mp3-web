import React, { useRef } from 'react'
import './MediaPlayer.scss'

const Bar = (props) => {
    const barRef = useRef()
    const { duration, currentTime = 0, setClickBarTime } = props
    const percentage = (currentTime / duration) * 100

    const formatDuration = (time) => {
        let secNumber = parseInt(time, 10)
        let hours = Math.floor(secNumber / 3600)
        let minutes = Math.floor((secNumber - hours * 3600) / 60)
        let seconds = secNumber - hours * 3600 - minutes * 60
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        if (!minutes) {
            minutes = '-- '
        }
        if (!seconds) {
            seconds = ' --'
        }
        return `${minutes}:${seconds}`
    }

    const clickBarTime = (e) => {
        const clickX = e.pageX
        const bar = barRef.current
        const barWidth = bar.offsetWidth
        const barLeft = bar.getBoundingClientRect().left
        const clickBarPosition = clickX - barLeft
        const time = (clickBarPosition / barWidth) * duration

        setClickBarTime(time)
    }

    return (
        <div className="barBox">
            <span>{formatDuration(currentTime)}</span>
            <div
                ref={barRef}
                className="bar"
                style={{
                    background: `linear-gradient(to right, red ${percentage}%, #C6CDD2 0)`,
                }}
                onClick={(e) => clickBarTime(e)}
            >
                <div className="point" style={{ left: `${percentage - 2}%` }}></div>
            </div>
            <span>{formatDuration(duration)}</span>
        </div>
    )
}
export default Bar
