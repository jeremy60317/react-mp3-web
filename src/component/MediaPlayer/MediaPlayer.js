import React, { useRef } from 'react'
import Play from './Play'
import Pause from './Pause'
import Bar from './Bar'

import useAudio from '../../tools/useAudio'
import './MediaPlayer.scss'

const MediaPlayer = (props) => {
    const { state } = props
    const song = state.songs[0]
    console.log('state', state)
    const audioRef = useRef()
    const { playing, setPlaying, duration, currentTime, setClickBarTime } = useAudio(audioRef)
    return (
        <div className="MediaPlayer">
            <audio ref={audioRef} src={song.music} />
            <div className="controller">
                {playing ? <Pause onClick={() => setPlaying(false)} /> : <Play onClick={() => setPlaying(true)} />}
                <Bar duration={duration} currentTime={currentTime} setClickBarTime={setClickBarTime} />
            </div>
        </div>
    )
}

export default MediaPlayer
