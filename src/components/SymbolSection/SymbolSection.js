import React from 'react'

import styled from 'styled-components'
import {
  colors,
  navbar,
  borders,
  sequencer,
} from '../../theme.js'

import Tile from './Tile.js'

const SymbolSectionContainer = styled.div`
  background-color: ${colors.primaryLight};
  border: ${borders.medium};
  border-bottom: none;
  border-left: none;
  width: 55%;
  margin-left: ${navbar.width};
  min-height: calc(
    100vh - ${sequencer.height.large} - ${borders.medium.split(' ')[0]}
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

const SymbolSection = (props) => {
  const { title, symbolData } = props
  return (
    <SymbolSectionContainer>
      <HeadingContainer>
        <h1>{title}</h1>
      </HeadingContainer>

      <TileContainer>

       {symbolData.map((symbol, index) =>  <Tile index={index} key={index} symbol={symbol.symbol} sound={symbol.sound}/> )}

      </TileContainer>
    </SymbolSectionContainer>
  )
}

export default SymbolSection
