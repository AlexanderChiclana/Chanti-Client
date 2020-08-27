import React, { Component } from 'react';

import styled from 'styled-components'
import { colors, navbar, borders, sequencer, fontSize, flex } from '../../theme.js'

const ButtonContainer = styled.div`
    background-color: ${colors.secondary};
    border-radius: 50%;
    border: ${borders.small};
    height: 40px;
    width: 40px;
`

const PlayButton = (props) => {

    const { setSequencePlayStatus } = props
    return ( 
        <ButtonContainer onClick={() => setSequencePlayStatus('PLAYING')}>
                
        </ButtonContainer>
     );
}


export default PlayButton;