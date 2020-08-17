import React, { Component } from 'react'

import styled from 'styled-components'
import {
  colors,
  navbar,
  borders,
  sequencer,
  fontSize,
  flex
} from '../../theme.js'
import Tile from './Tile.js'

const SymbolSectionContainer = styled.div`
  background-color: ${colors.primaryLight};
  border: ${borders.large};
  border-bottom: none;
  border-left: none;
  width: 55%;
  margin-left: ${navbar.width};
  min-height: calc(
    100vh - ${sequencer.height.large} - ${borders.large.split(' ')[0]} -
      ${borders.large.split(' ')[0]}
  );
  overflow: scroll;
`
const HeadingContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: ${colors.white};
  margin: 40px 0px 20px 0px;
`
// grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
const TileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 130px);
  width: calc(100% - 60px);
  padding: 0px 40px;
  margin: 40px auto;
  justify-items: center;
  align-items: center;
  grid-row-gap: 5px;
  grid-column-gap: 5px;
`
// width: calc(70% - ${navbar.width} / 2);

class SymbolSection extends Component {
  render() {
    return (
      <SymbolSectionContainer>
        <HeadingContainer>
          <h1>Haftarah symbols</h1>
        </HeadingContainer>
        <TileContainer>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </TileContainer>
      </SymbolSectionContainer>
    )
  }
}

export default SymbolSection
