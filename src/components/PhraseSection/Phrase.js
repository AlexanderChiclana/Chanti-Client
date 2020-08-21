import React, { Component } from 'react'
import Tile from '../SymbolSection/Tile.js'
import PlayButton from '../MediaControls/PlayButton.js'
import { SlideInRight, FlipInX, BounceInDown } from 'animate-css-styled-components'

import styled from 'styled-components'
import { colors, navbar, sequencer, borders } from '../../theme.js'

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

class Phrase extends Component {
  
  render() {
    const { index } = this.props
    return (
      // <BounceInDown duration={'1s'} delay={`${index / 4}s`}>
      <PhraseContainer>
        <TileGroup>
          <Tile isSmall={true} index={1} symbol={'A'}/>
          <Tile isSmall={true} index={2} symbol={'B'}/>
          <Tile isSmall={true} index={3} symbol={'C'}/>
          <Tile isSmall={true} index={4} symbol={'D'}/>
          <Tile isSmall={true} index={5} symbol={'E'}/>
          <Tile isSmall={true} index={6} symbol={'F'}/>
        </TileGroup>

        <NameGroup>
          <Title>Etnakhta</Title>

          <PlayButton />
        </NameGroup>
      </PhraseContainer>
      // </BounceInDown>
    )
  }
}

export default Phrase
