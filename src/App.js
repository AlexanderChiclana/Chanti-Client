import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navigation/Navbar.js'
import Sequencer from './components/Sequencer/Sequencer.js'
import SymbolSection from './components/SymbolSection/SymbolSection.js'
import PhraseSection from './components/PhraseSection/PhraseSection.js'
import DragPreview from './components/DragPreviews/DragPreview.js'
import BookPage from './pages/BookPage.js'

// dnd backends
import { DndProvider } from 'react-dnd-multi-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend'

import systems from './data/systems.js'


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
        <Route exact path='/torah' render={() => (<BookPage symbolData={systems.torah.symbolSounds} title={'Torah'}/>)} /> 
        <Route exact path='/lamentation' render={() => (<BookPage title={'Lamentation'}/>)} /> 
        <Route exact path='/hhd' render={() => (<BookPage title={'HHD Torah'}/>)} /> 
        <Route exact path='/haftarah' render={() => (<BookPage title={'Haftarah'}/>)} /> 
        <Route exact path='/ruth' render={() => (<BookPage title={'Ruth'}/>)} /> 
        <Route exact path='/esther' render={() => (<BookPage title={'Esther'}/>)} /> 

      </div>
    </DndProvider>
  )
}

export default App
