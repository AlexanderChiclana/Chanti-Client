import React from 'react';

import styled from 'styled-components'
import { colors, borders} from '../../theme.js'

const ButtonContainer = styled.div`
    background-color: ${colors.secondary};
    border-radius: 50%;
    border: ${borders.small};
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
`

const PlayButton = (props) => {

    const { setSequencePlayStatus, sequencePlayStatus } = props
    return ( 
        <ButtonContainer onClick={() => setSequencePlayStatus('PLAYING')}>
              <div>PLAY</div>
        </ButtonContainer>
     );
}


export default PlayButton;