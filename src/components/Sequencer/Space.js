import React from 'react'
import styled from 'styled-components'
import { borders, colors } from '../../theme.js'
import { BounceIn } from 'animate-css-styled-components'

const SpaceContainer = styled.div`
  background-color: ${props => (props.isDropTarget ? '#6C9AB7' : '#6C9AB7')};
  opacity: ${props => (props.isDropTarget || props.hasPlayed ? '.5' : '1')};
  transition: opacity 150ms;
  border-radius: 15%;
  height: 130px;
  width: 130px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ValueSpace = styled.div`
  background-color: ${props =>
    props.isPlaying ? colors.secondaryLight : colors.white};
  // opacity: ${props => props.hasPlayed && '.3'};
  height: 100%;
  width: 100%;
  border-radius: inherit;
  border: ${borders.large};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 90px;
  font-weight: bold;
`

const PlayingOverlay = styled.div`
  height: 130px;
  width: calc(130px *  ${(props) => props.playCompletion});
  border-radius: inherit;
  position: absolute;
  background-color: black;
  opacity: 0.6;
  transition: width .1s;
  `

const Space = props => {
  const {
    spaceValue,
    isDropTarget,
    isPlaying,
    hasPlayed
    // currentSoundCompletion
  } = props

  return (
    <SpaceContainer isDropTarget={isDropTarget} hasPlayed={hasPlayed}>
      {spaceValue && (
        <ValueSpace isPlaying={isPlaying} hasPlayed={hasPlayed}>
          {/* <PlayingOverlay playCompletion={spaceValue.playCompletion}/> */}
          <BounceIn>
            {spaceValue.symbol}
            {/* {spaceValue.playCompletion} */}
          </BounceIn>
        </ValueSpace>
      )}
    </SpaceContainer>
  )
}

export default Space
