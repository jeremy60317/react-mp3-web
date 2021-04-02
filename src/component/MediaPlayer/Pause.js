import React from 'react'
import { PauseCircleFilled } from '@material-ui/icons'

const Pause = (props) => {
    const { onClick } = props
    return (
        <button onClick={onClick}>
            <PauseCircleFilled />
        </button>
    )
}

export default Pause
