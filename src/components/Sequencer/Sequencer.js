import React, { useState } from 'react'

import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../items.js'

import MediaWidget from '../MediaControls/MediaWidget.js'

import styled from 'styled-components'
import { borders, colors, navbar, sequencer } from '../../theme.js'
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
  const [sequencePlayStatus, setSequencePlayStatus] = useState('STOPPED')
  const [currentSound, setCurrentSound] = useState(0)

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

  const isDropTarget = index => (
    sequence.findIndex(space => space === null) === index && isOver
  )

  const isPlaying = (index) => (
    
    index === currentSound && (sequencePlayStatus === 'PLAYING' || sequencePlayStatus === 'PAUSED')
  )

  const hasPlayed = (index) => (
    
    index < currentSound && (sequencePlayStatus === 'PLAYING' || sequencePlayStatus === 'PAUSED')
  )

  return (
    <SequencerContainer ref={drop}>
      <Sound
        url={'pop.mp3'}
        playbackRate={2}
        playStatus={Sound.status[dropSound]}
        onFinishedPlaying={() => toggleDrop('STOPPED')}
      />
      <SpaceContainer>
        {
          sequence.map((space, index) => (
          <Space
            key={index}
            isPlaying={isPlaying(index)}
            hasPlayed={hasPlayed(index)}
            isDropTarget={isDropTarget(index)}
            spaceValue={space}
          />
        ))}

        {sequencePlayStatus === 'PLAYING' && (
          <SoundSequence
            currentSound={currentSound}
            setCurrentSound={setCurrentSound}
            setSequencePlayStatus={setSequencePlayStatus}
            sequence={sequence.filter(space => space)}
          />
        )}
      </SpaceContainer>
      <ControlsContainer>
        <MediaWidget
          setSequencePlayStatus={setSequencePlayStatus}
          sequencePlayStatus={sequencePlayStatus}
          setCurrentSound={setCurrentSound}
        />
      </ControlsContainer>
    </SequencerContainer>
  )
}

const SoundSequence = props => {
  const {
    setSequencePlayStatus,
    sequence,
    currentSound,
    setCurrentSound
  } = props
  // take in sound components as props or children
  // only one component rendering at a time, always playing
  // on finish, unmount and render following component
  const handleSoundEnd = index => {
    if (index + 1 === sequence.length) {
      setCurrentSound(0)
      setSequencePlayStatus('STOPPED')
    } else {
      setCurrentSound(index + 1)
    }
  }

  const calcSoundCompletion = (playObject) => {
    console.log(playObject.position / playObject.duration)
  }

  return (
    <React.Fragment>
      {sequence.map(
        (space, index) =>
          currentSound === index && (
            <Sound
              key={index}
              playbackRate={2}
              url={space.sound}
              onPlaying={(playObject) => calcSoundCompletion(playObject)}
              playStatus={Sound.status.PLAYING}
              onFinishedPlaying={() => handleSoundEnd(index)}
            />
          )
      )}
    </React.Fragment>
  )
}

export default Sequencer
