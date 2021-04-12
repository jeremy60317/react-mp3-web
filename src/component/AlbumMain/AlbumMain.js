import React, { useContext } from 'react'
import useNowTime from '../../hooks/useNowTime'
import { AlbumMainWrapperStyle } from '../../styledComponent'
import ContextStore from '../../context/contextStore'

const AlbumMain = () => {
  const { indexState, dispatch, actions } = useContext(ContextStore)
  const { album, myAlbum } = indexState
  const { now, nowHour, nowMin, nowSec, whenTime } = useNowTime()
  return (
    <AlbumMainWrapperStyle bgc="#c7dfdf">
      <div>{`${whenTime}，${now}`}111111</div>
      {album.map((itm) => {
        return (
          <div>
            <img src={itm.image}></img>
          </div>
        )
      })}
    </AlbumMainWrapperStyle>
  )
}

export default AlbumMain
