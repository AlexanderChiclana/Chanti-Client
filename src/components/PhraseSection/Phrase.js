import React, { Component } from 'react';
import Tile from '../SymbolSection/Tile.js'
import styled from 'styled-components'
import { colors, navbar, sequencer, borders } from '../../theme.js'

const PhraseContainer = styled.div`
    padding: 0px 20px;
    border-radius: 50px;
    border: ${borders.medium};
    background-color: ${colors.secondaryLight};
    display: flex;
    height: 65px;
    align-items: center;
    margin-bottom: 7px;
`

class Phrase extends Component {
    render() {
        return (
            <PhraseContainer>
                <Tile isSmall={true}/>
                <Tile isSmall={true}/>
                <Tile isSmall={true}/>
                <Tile isSmall={true}/>
                <Tile isSmall={true}/>
                <Tile isSmall={true}/>
            </PhraseContainer>
        );
    }
}

export default Phrase;