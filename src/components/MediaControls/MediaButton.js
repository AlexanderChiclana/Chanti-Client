import React, { Component } from 'react';
import styled from 'styled-components'
import { colors, navbar, borders, sequencer, fontSize, flex } from '../../theme.js'

const ButtonContainer = styled.div`
background-color: ${colors.offBlack};
border-radius: 50%;
border: ${borders.large};
height: 80px;
width: 80px;
`

class MediaButton extends Component {
    render() {
        return (
            <ButtonContainer>
                
            </ButtonContainer>
        );
    }
}

export default MediaButton;