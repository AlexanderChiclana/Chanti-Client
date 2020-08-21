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

import { HeadShake, FadeIn, FadeOut } from 'animate-css-styled-components'

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

const SymbolSection = (props) => {
  const { title } = props
  return (
    <SymbolSectionContainer>
      <HeadingContainer>
        <h1>{title}</h1>
      </HeadingContainer>

      <TileContainer>
        <Tile index={1} symbol={'A'} />
        <Tile index={2} symbol={'B'} />
        <Tile index={3} symbol={'C'} />
        <Tile index={4} symbol={'D'} />
        <Tile index={5} symbol={'E'} />
        <Tile index={6} symbol={'F'} />
        <Tile index={7} symbol={'G'} />
        <Tile index={8} symbol={'H'} />
        <Tile index={9} symbol={'I'} />
        <Tile index={10} symbol={'J'} />
        <Tile index={11} symbol={'K'} />
        <Tile index={12} symbol={'L'} />
        <Tile index={13} symbol={'M'} />
        <Tile index={14} symbol={'N'} />
        <Tile index={15} symbol={'O'} />
        <Tile index={16} symbol={'P'} />
        <Tile index={17} symbol={'Y'} />
        <Tile index={18} symbol={'R'} />
        <Tile index={19} symbol={'S'} />
      </TileContainer>
    </SymbolSectionContainer>
  )
}

export default SymbolSection
