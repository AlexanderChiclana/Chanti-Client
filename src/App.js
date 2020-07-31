import React from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar.js'
import Sequencer from './components/Sequencer/Sequencer.js';
import SymbolSection from './components/SymbolSection/SymbolSection.js'
import PhraseSection from './components/PhraseSection/PhraseSection.js'

function App() {
  return (
    <div className="App">
        <Navbar />

        <Sequencer />
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
        <SymbolSection />
        <PhraseSection />
        </div>
    </div>
  );
}

export default App;
