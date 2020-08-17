import React from 'react'
import './App.css'
import Navbar from './components/Navigation/Navbar.js'
import Sequencer from './components/Sequencer/Sequencer.js'
import SymbolSection from './components/SymbolSection/SymbolSection.js'
import PhraseSection from './components/PhraseSection/PhraseSection.js'

// dnd backends
import { DndProvider } from 'react-dnd-multi-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import MultiBackend, { TouchTransition, } from 'react-dnd-multi-backend'
import { usePreview } from 'react-dnd-multi-backend'

import styled from 'styled-components'
import { colors, navbar, sequencer, borders } from './theme.js'

const TileContainer = styled.div`
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

// custom preview for dragged preview, needs to be higher up for performance reasons
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
    <div style={{...style, zIndex: '500'}}>
      
      <TileContainer hiddenColor={item.hiddenColor} isDragging={true}> 
      {item.symbol}
      </TileContainer>
    </div>
  )
}

const HTML5toTouch = {
  backends: [
    {
      backend: TouchBackend, // Note that you can call your backends with options
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition
      // skipDispatchOnTransition: true
    },
    {
      backend: HTML5Backend
    }
  ]
}

function App() {
  return (
    <div className="App">
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <DragPreview />

        <Navbar />

        <Sequencer />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SymbolSection />
          <PhraseSection />
        </div>
      </DndProvider>
    </div>
  )
}

export default App
