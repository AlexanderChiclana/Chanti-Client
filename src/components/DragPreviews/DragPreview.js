import React from 'react'
import { Pulse } from 'animate-css-styled-components'
import styled from 'styled-components'
import { colors, borders } from '../../theme.js'
import { usePreview } from 'react-dnd-multi-backend'


const TilePreview = styled.div`
  background-color: ${colors.white};
  height: 120px;
  width: 120px;
  border-radius: 10%;
  border: ${borders.large};
  display: flex;
  justify-content: center;
  margin: 1px;
  align-items: center;
  font-size: 90px;
  font-weight: bold;
  z-index: 500;
  cursor: grabbing;
`

const DragPreview = () => {
    // hook for getting a preview from multi-dnd, an emulation of the preview since touch backend does not have preview by default
    // item refers to the dragging item, has access to props
    // style contains the position of mouse, necessary to wrap outer component of the custom preview
    const { display, item, style } = usePreview()
    // check for any display
    if (!display) {
      return null
    }
    return (
      // copy of the component for the preview, uses StyledBall as single souce of truth
      // can manually pass true to isDragging since it is the preview
      <div className="dragging" style={{ ...style, zIndex: '500' }}>
        <Pulse iterationCount={'infinite'}>
          <TilePreview hiddenColor={item.hiddenColor} isDragging={true}>
            {item.symbol}
          </TilePreview>
        </Pulse>
      </div>
    )
  }

export default DragPreview