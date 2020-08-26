import React from 'react'
import Sequencer from '../components/Sequencer/Sequencer.js'
import SymbolSection from '../components/SymbolSection/SymbolSection.js'
import PhraseSection from '../components/PhraseSection/PhraseSection.js'

const BookPage = (props) => {
    const { title, symbolData } = props
    return ( 
        <React.Fragment>
        <Sequencer />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SymbolSection symbolData={symbolData} title={title}/>
          <PhraseSection />
        </div>
        </React.Fragment>
     );
}
 
export default BookPage;