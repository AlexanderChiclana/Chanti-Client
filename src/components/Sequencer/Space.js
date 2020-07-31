import React, { Component } from 'react';
import styled from 'styled-components'
import { borders, colors, flex, fontSize, navbar } from '../../theme.js'

const SpaceContainer = styled.div`
    background-color: ${colors.white};
    opacity: 40%;
    border-radius: 15%;
    height: 130px;
    width: 130px;
    margin: 1vh;
`
// min-height 14vh;
// min-width: 14vh;
class Space extends Component {
    render() {
        return (
            <SpaceContainer>
                
            </SpaceContainer>
        );
    }
}

export default Space;