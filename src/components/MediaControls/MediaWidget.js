import React from 'react'

import MediaButton from './MediaButton.js'

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

const MediaWidget = (props) => {
  const { setSequencePlayStatus, sequencePlayStatus } = props
  return (
    <MediaWidgetContainer>
      <Bar>
        <MediaButton />
        <PlayButton sequencePlayStatus={sequencePlayStatus} onClick={() => setSequencePlayStatus('PLAYING')}>
          {sequencePlayStatus}
        </PlayButton>
        <MediaButton />
      </Bar>
    </MediaWidgetContainer>
  )
}

export default MediaWidget
