import React, { Component } from 'react'

import styled from 'styled-components'
import { colors, navbar, sequencer, borders } from '../../theme.js'

import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../items.js'
import { usePreview } from 'react-dnd-multi-backend'

const TileContainer = styled.div`
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
`

class Tile extends Component {
  render() {
    const { isSmall } = this.props

    return (

        <TileContainer isSmall={isSmall}>A</TileContainer>
      
    )
  }
}



export default Tile
