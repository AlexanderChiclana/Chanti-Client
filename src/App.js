import React from 'react'
import './App.css'
import Navbar from './components/Navigation/Navbar.js'
import Sequencer from './components/Sequencer/Sequencer.js'
import SymbolSection from './components/SymbolSection/SymbolSection.js'
import PhraseSection from './components/PhraseSection/PhraseSection.js'
import DragPreview from './components/DragPreviews/DragPreview.js'

// dnd backends
import { DndProvider } from 'react-dnd-multi-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend'


const HTML5toTouch = {
  backends: [
    {
      backend: TouchBackend, 
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition
    },
    {
      backend: HTML5Backend
    }
  ]
}

const App = () => {
  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="App">
        <DragPreview />
        <Navbar />
        <Sequencer />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SymbolSection />
          <PhraseSection />
        </div>
      </div>
    </DndProvider>
  )
}

export default App
