import React, { Component } from 'react'
import Tile from '../SymbolSection/Tile.js'
import PlayButton from '../MediaControls/PlayButton.js'
import {
  SlideInRight,
  FlipInX,
  BounceInDown
} from 'animate-css-styled-components'

import styled from 'styled-components'
import { colors, navbar, sequencer, borders } from '../../theme.js'


import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../items.js'

const PhraseContainer = styled.div`
  padding: 0px 10px 0px 20px;
  border-radius: 50px;
  border: ${borders.medium};
  background-color: ${colors.secondaryLight};
  display: flex;
  height: 65px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`

const TileGroup = styled.div`
  display: flex;
  overflow: hidden;
`

const NameGroup = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h3`
  margin: 0px 10px;
`

const Phrase = props => {
  const { index } = props

  const [{ isDragging }, drag] = useDrag({
    // need to define type based on set itemtypes, can attach additional props here. Accesible any time we interact with an item
    item: {
      type: ItemTypes.PHRASE
    },
    // collection function, connects the browsers monitoring of dnd to props that react can use. Ball now has acces to drag info
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })


  return (
    <PhraseContainer ref={drag}>
      <TileGroup>
        <Tile isSmall={true} index={1} symbol={'A'} />
        <Tile isSmall={true} index={2} symbol={'B'} />
        <Tile isSmall={true} index={3} symbol={'C'} />
        <Tile isSmall={true} index={4} symbol={'D'} />
        <Tile isSmall={true} index={5} symbol={'E'} />
        <Tile isSmall={true} index={6} symbol={'F'} />
      </TileGroup>

      <NameGroup>
        <Title>Etnakhta</Title>

        <PlayButton />
      </NameGroup>
    </PhraseContainer>
  )
}

export default Phrase
