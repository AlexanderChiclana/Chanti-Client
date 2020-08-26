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
`

const PhrasePreview = styled.div`

`


const DragPreview = () => {
  // hook for getting a preview from multi-dnd, an emulation of the preview since touch backend does not have preview by default
  // item refers to the dragging item, has access to props
  // style contains the position of mouse, necessary to wrap outer component of the custom preview
  const { display, item, style, itemType } = usePreview()
  // check for any display
  if (!display) {
    return null
  }

  if (itemType === 'tile') {
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
  } else if (itemType === 'phrase'){
    return(
      <div className="dragging" style={{ ...style, zIndex: '500' }}>
      <Pulse iterationCount={'infinite'}>
        <PhrasePreview>
            What to do here?
        </PhrasePreview>
      </Pulse>
    </div>
    )
  }

  else {
    return null
  }
}

export default DragPreview
