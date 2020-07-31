import React, { Component } from 'react';
import Phrase from './Phrase.js'

import styled from 'styled-components'
import { colors, navbar, sequencer, borders } from '../../theme.js'

const HeadingContainer = styled.div`
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: ${colors.white};
    margin: 40px 0px 40px 0px;
`

const PhraseSectionContainer = styled.div`
    background-color: ${colors.secondary};
    height: calc( 100vh - ${sequencer.height.large} - ${borders.large.split(' ')[0]} - ${borders.large.split(' ')[0]}) );
    flex-grow: 1;
    border-top: ${borders.large};
    border-right: ${borders.large};
`

const PhraseListContainer = styled.div`
    padding: 0px 40px;
`

class PhraseSection extends Component {
    render() {
        return (
            <PhraseSectionContainer>
                <HeadingContainer >
                    <h1>
                        common phrases
                    </h1>
                </HeadingContainer>
                <PhraseListContainer>
                    <Phrase />
                    <Phrase />
                    <Phrase />
                    <Phrase />
                    <Phrase />
                    <Phrase />
                </PhraseListContainer>

            </PhraseSectionContainer>
        );
    }
}

export default PhraseSection;