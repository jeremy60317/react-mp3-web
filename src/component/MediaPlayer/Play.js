import React from 'react'
import { PlayCircleFilled } from '@material-ui/icons'

const Play = (props) => {
    const { onClick } = props
    return (
        <button onClick={onClick}>
            <PlayCircleFilled />
        </button>
    )
}

export default Play
