import React, { useState } from 'react'

import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../items.js'

import MediaWidget from '../MediaControls/MediaWidget.js'

import styled from 'styled-components'
import {
  borders,
  colors,
  flex,
  fontSize,
  navbar,
  sequencer
} from '../../theme.js'
import Space from './Space.js'

import Sound from 'react-sound'

const SequencerContainer = styled.div`
  display: flex;

  width: calc(100vw - ${navbar.width});
  position: fixed;
  right: 0px;
  min-height: 160px;
  height: ${sequencer.height.large};
  background-color: ${colors.primary};
  bottom: 0px;
  padding-left: 220px;
  border: ${borders.medium};
  border-right: 0px;
  border-bottom: 0px;
  z-index: 150;
`

const SpaceContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 55%;
  align-items: center;
  justify-content: flex-end;
  padding: 4vh;
`

const ControlsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`

const Sequencer = () => {
  const [sequence, setSequence] = useState([null, null, null, null, null, null])

  const [dropSound, toggleDrop] = useState('STOPPED')

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TILE,
    drop: (item, monitor) => addSymbol(item),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })

  const addSymbol = item => {
    const sequenceCopy = [...sequence]

    sequenceCopy[sequenceCopy.findIndex(space => space === null)] = {
      symbol: item.symbol,
      sound: item.sound
    }

    setSequence(sequenceCopy)
    sequence.includes(null) && toggleDrop('PLAYING')
  }

  const isDropTarget = index =>
    sequence.findIndex(space => space === null) === index && isOver

  // const [playingIndex, setPlayingIndex] = useState(0)
  const [sequencePlayStatus, setSequencePlayStatus] = useState('STOPPED')

  return (
    <SequencerContainer ref={drop}>
      <Sound
        url={'pop.mp3'}
        playStatus={Sound.status[dropSound]}
        onFinishedPlaying={() => toggleDrop('STOPPED')}
      />
      <SpaceContainer>
        {sequence.map((space, index) => (
          <Space
            key={index}
            isDropTarget={isDropTarget(index)}
            spaceValue={space}
          />
        ))}

        {sequencePlayStatus === 'PLAYING' && (
          <SoundSequence setSequencePlayStatus={setSequencePlayStatus} />
        )}
      </SpaceContainer>
      <ControlsContainer>
        <MediaWidget setSequencePlayStatus={setSequencePlayStatus} />
      </ControlsContainer>
    </SequencerContainer>
  )
}

const SoundSequence = props => {
  const { setSequencePlayStatus } = props
  // take in sound components as props or children
  // only one component rendering at a time, always playing
  // on finish, unmount and render following component

  const [currentSound, setCurrentSound] = useState(0)

  return (
    <React.Fragment>
      {currentSound === 0 && (
        <Sound
          url={'Retro - Shuriken Laser.wav'}
          playStatus={Sound.status.PLAYING}
          onFinishedPlaying={() => setCurrentSound(1)}
        />
      )}
      {currentSound === 1 && (
        <Sound
          url={'Short - Digital Malfunction.wav'}
          playStatus={Sound.status.PLAYING}
          onFinishedPlaying={() => setCurrentSound(2)}
        />
      )}
      {currentSound === 2 && (
        <Sound
          url={'Short - Ploppy Plop.wav'}
          playStatus={Sound.status.PLAYING}
          onFinishedPlaying={() => setSequencePlayStatus('STOPPED')}
        />
      )}
    </React.Fragment>
  )
}

export default Sequencer
