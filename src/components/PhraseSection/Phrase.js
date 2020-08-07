import React, { Component } from 'react'
import Tile from '../SymbolSection/Tile.js'
import PlayButton from '../MediaControls/PlayButton.js'

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
    return (
      <PhraseContainer>
        <TileGroup>
          <Tile isSmall={true} />
          <Tile isSmall={true} />
          <Tile isSmall={true} />
          <Tile isSmall={true} />
          <Tile isSmall={true} />
          <Tile isSmall={true} />
        </TileGroup>

        <NameGroup>
          <Title>Etnakhta</Title>

          <PlayButton />
        </NameGroup>
      </PhraseContainer>
    )
  }
}

export default Phrase
