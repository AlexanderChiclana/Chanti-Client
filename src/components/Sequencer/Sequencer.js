import React, { useState } from 'react'

import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../items.js';

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
  border: ${borders.large};
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

  const [sequence, setSequence] = useState(
    [null, null, null, null, null, null]
  )


  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.TILE,
    drop: (item, monitor) => addSymbol(item.symbol),
    collect: monitor => ({
        isOver: !!monitor.isOver()
    })
})

  const addSymbol = symbol => {

    const sequenceCopy = [...sequence]
    
    sequenceCopy[sequenceCopy.findIndex(space => space === null)] = symbol
    
    setSequence(sequenceCopy)
  }

  const isDropTarget = (index) => (sequence.findIndex(space => space === null) === index && isOver)
  

  return (
    <SequencerContainer ref={drop}>
      <SpaceContainer>
        {sequence.map((space, index) => (
          <Space key={index} isDropTarget={isDropTarget(index)} value={space} />
        ))}
      </SpaceContainer>
      <ControlsContainer>
        <MediaWidget />
      </ControlsContainer>
    </SequencerContainer>
  )
}

export default Sequencer
