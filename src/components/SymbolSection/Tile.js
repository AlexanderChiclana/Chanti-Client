import React, { Component } from 'react'

import styled from 'styled-components'
import { colors, navbar, sequencer, borders } from '../../theme.js'

import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../items.js'
import { usePreview } from 'react-dnd-multi-backend'

const TileContainer = styled.div`
  cursor: grab;
  opacity: ${props => (props.isDragging ? '.5' : '1')};
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
// custom preview for dragged preview
// const TilePreview = () => {
//   // hook for getting a preview from multi-dnd, an emulation of the preview since touch backend does not have preview by default
//   // item refers to the dragging item, has access to props
//   // style contains the position of mouse, necessary to wrap outer component of the custom preview
//   const { display, item, style } = usePreview()
//   // check for any display
//   if (!display) {
//     return null
//   }
//   return (
//     // copy of the component for the preview, uses StyledBall as single souce of truth
//     // can manually pass true to isDragging since it is the preview
//     <div style={style}>
    
//       <TileContainer hiddenColor={item.hiddenColor} isDragging={true}> 
//       A
//       </TileContainer>
//     </div>
//   )
// }

const Tile = (props) => {

  const { isSmall, symbol } = props

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

  return ( 
    <TileContainer 
      isSmall={isSmall} 
      ref={drag}
      isDragging={isDragging}
    >
      {symbol}
      {/* <TilePreview isDragging={isDragging} /> */}
    </TileContainer>
   );
}
 
export default Tile
