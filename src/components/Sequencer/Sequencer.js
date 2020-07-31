import React, { Component } from 'react';
import styled from 'styled-components'
import { borders, colors, flex, fontSize, navbar, sequencer} from '../../theme.js'
import Space from './Space.js'

const SequencerContainer = styled.div`
    display: flex;
    width: calc(100vw - ${navbar.width});
    position: fixed;
    right: 0px;
    min-height: 160px;
    height: ${sequencer.height.large};
    background-color: ${colors.primary};
    bottom: 0px;
    padding-left: 220px; 
    border: ${borders.large};
    display: flex;
`

const SpaceContainer = styled.div`
    display: flex;
    width: 65%;
    align-items: center;
    justify-content: center;
    padding: 4vh;
`

const ControlsContainer = styled.div`
    display: flex;
    
    ${flex.center};
`

class Sequencer extends Component {
    render() {
        return (
            <SequencerContainer>
                <SpaceContainer>
                    <Space />
                    <Space /> 
                    <Space />
                    <Space />
                    <Space />
                    <Space />

                </SpaceContainer>
                <ControlsContainer>
                    hey
                </ControlsContainer>
                
            </SequencerContainer>
        );
    }
}

export default Sequencer;