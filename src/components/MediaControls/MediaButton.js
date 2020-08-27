import React, { Component } from 'react';
import styled from 'styled-components'
import { colors, borders} from '../../theme.js'

const ButtonContainer = styled.div`
background-color: ${colors.offBlack};
border-radius: 50%;
border: ${borders.medium};
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