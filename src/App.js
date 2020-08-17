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
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend'

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
