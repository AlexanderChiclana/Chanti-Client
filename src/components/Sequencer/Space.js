import React, { Component } from 'react'
import styled from 'styled-components'
import { borders, colors, flex, fontSize, navbar } from '../../theme.js'

const SpaceContainer = styled.div`
  background-color: ${(props) => props.isDropTarget ? colors.secondaryLight : colors.white };
  opacity: ${(props) => props.value ? '100%' : '40%'};
  border-radius: 15%;
  height: 130px;
  width: 130px;
  margin: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ValueSpace = styled.div`
  background-color: ${colors.white};
  height: 100%;
  width: 100%;
  border-radius: inherit;
  border: ${borders.large};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 90px;
  font-weight: bold;
`

const Space = props => {
  const { value, isDropTarget } = props

  return (
    <SpaceContainer value={value} isDropTarget={isDropTarget}>
      {value && <ValueSpace> {value} </ValueSpace>}
    </SpaceContainer>
  )
}

export default Space
