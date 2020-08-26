import React, { useState } from 'react'

import styled from 'styled-components'
import { colors, navbar, sequencer, borders } from '../../theme.js'

import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../items.js'
import { usePreview } from 'react-dnd-multi-backend'

import { FlipInX } from 'animate-css-styled-components'
import Sound from 'react-sound';


const TileContainer = styled.div`
  opacity: ${props => ((props.isDragging || props.isPlaying) ? '.5' : '1')};
  background-color: ${colors.white};
  height: ${props => (props.isSmall ? '45px' : '120px')};
  width: ${props => (props.isSmall ? '45px' : '120px')};
  border-radius: ${props => (props.isSmall ? '20%' : '10%')};
  border: ${props => (props.isSmall ? borders.medium : borders.large)};
  display: flex;
  justify-content: center;
  margin: ${props => props.isSmall && '1px'};
  align-items: center;
  font-size: ${props => (props.isSmall ? '30px' : '90px')};
  font-weight: bold;
  z-index: 100;
`

const Tile = props => {
  const { isSmall, symbol, index, sound } = props

  const [playState, togglePlay] = useState('STOPPED') 
  

  const [{ isDragging }, drag] = useDrag({
    // need to define type based on set itemtypes, can attach additional props here. Accesible any time we interact with an item
    item: {
      type: ItemTypes.TILE,
      symbol: symbol
    },
    // collection function, connects the browsers monitoring of dnd to props that react can use. Ball now has acces to drag info
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const previewSound = () => {
    !isDragging && togglePlay('PLAYING')
  }




  return (
    <FlipInX duration={'.6s'} delay={`${index / 15}s`}>
      <Sound 
           url={sound}
           playStatus={isDragging ? Sound.status.STOPPED : Sound.status[playState] }
          //  playFromPosition={0 /* in milliseconds */}
          //  onLoading={handleSongLoading}
          //  onPlaying={() => {console.log('playing')}}
           onFinishedPlaying={() => togglePlay('STOPPED')}
            />
      <TileContainer
        onClick={previewSound}
        isSmall={isSmall}
        isPlaying={playState === 'PLAYING'}
        ref={playState === 'PLAYING' ? null : drag}
        isDragging={isDragging}
      >
        {symbol}
        {/* <TilePreview isDragging={isDragging} /> */}
      </TileContainer>
    </FlipInX>
  )
}

export default Tile
