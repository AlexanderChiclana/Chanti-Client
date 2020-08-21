import React, { Component } from 'react'
import styled from 'styled-components'
import { borders, colors, flex, fontSize, navbar } from '../../theme.js'
import { BounceIn, FadeIn, FadeOut } from 'animate-css-styled-components'

const SpaceContainer = styled.div`
  background-color: ${props => (props.isDropTarget ? '#6C9AB7' : '#6C9AB7')};
  opacity: ${props => (props.isDropTarget ? '.5' : '1')};
  transition: opacity 150ms;
  border-radius: 15%;
  height: 130px;
  width: 130px;
  margin: 5px;
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
      {value && (
        <ValueSpace>
          <BounceIn>{value}</BounceIn>
        </ValueSpace>
      )}
    </SpaceContainer>
  )
}

export default Space
