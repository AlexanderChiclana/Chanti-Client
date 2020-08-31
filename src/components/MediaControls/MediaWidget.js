import React from 'react'

import styled from 'styled-components'
import {
  colors,
  borders
} from '../../theme.js'

const MediaWidgetContainer = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
`

const Bar = styled.div`
  padding: 0px 10px 0px 10px;
  border-radius: 120px;
  border: ${borders.medium};
  background-color: ${colors.primaryLight};
  display: flex;
  height: 115px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const PlayButton = styled.div`
  background-color: ${colors.secondary};
  border-radius: 50%;
  border: ${borders.medium};
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`


const MediaButton = styled.div`
background-color: ${colors.offBlack};
border-radius: 50%;
border: ${borders.medium};
height: 80px;
width: 80px;
`

const MediaWidget = (props) => {
  const { setSequencePlayStatus, sequencePlayStatus, setCurrentSound } = props

  const handlePlayPause = () => {
    if(sequencePlayStatus === 'PLAYING'){
      setSequencePlayStatus('PAUSED')
    } else {
      setSequencePlayStatus('PLAYING')
    }
  }

  const handleStop = () => {
    console.log('stopping')
    setCurrentSound(0)
    setSequencePlayStatus('STOPPED')
  }

  return (
    <MediaWidgetContainer>
      <Bar>
        <MediaButton onClick={() => handleStop()}/>
        <PlayButton sequencePlayStatus={sequencePlayStatus} onClick={() => handlePlayPause()}>
          {sequencePlayStatus}
        </PlayButton>
        <MediaButton />
      </Bar>
    </MediaWidgetContainer>
  )
}

export default MediaWidget
