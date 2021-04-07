import { useState, useEffect } from 'react'

const useAudio = (ref) => {
    const [playing, setPlaying] = useState(false)
    const [duration, setDuration] = useState()
    const [currentTime, setCurrentTime] = useState()
    const [clickBarTime, setClickBarTime] = useState()

    useEffect(() => {
        const audio = ref.current
        const setData = () => {
            setDuration(audio.duration)
            setCurrentTime(audio.currentTime)
        }
        const setTime = () => setCurrentTime(audio.currentTime)

        audio.addEventListener('loadeddata', setData)
        audio.addEventListener('timeupdate', setTime)

        playing ? audio.play() : audio.pause()

        if (clickBarTime) {
            audio.currentTime = clickBarTime
            setClickBarTime(null)
        }

        return () => {
            audio.removeEventListener('loadeddata', setData)
            audio.removeEventListener('timeupdate', setTime)
        }
    }, [ref, playing, clickBarTime])

    return {
        playing,
        setPlaying,
        duration,
        currentTime,
        setClickBarTime,
    }
}

export default useAudio
