import React from 'react'
import styled from 'styled-components'
import { borders, colors, flex, fontSize } from '../../theme.js'
import { Link, withRouter  } from 'react-router-dom'
import { FlipInX } from 'animate-css-styled-components'


const NavbarItemContainer = styled.div.attrs(props => ({
  className: props.isActive ? 'isActive navbarItem' : 'navbarItem'
}))`
  min-height: 60px;
  height: 8vh;
  width: ${props => props.isActive && '105%'};
  border-radius: ${props => props.isActive && '0px 20px 20px 0px'};
  background-color: ${props =>
    props.isActive ? colors.primaryLight : colors.primary};
  border-top: ${borders.large};
  border-right: ${borders.large};
  border-left: ${borders.large};
  border-bottom: ${props => props.isActive && borders.large};
  color: ${colors.white};
  ${flex.center};
  font-weight: 700;
  font-size: ${fontSize.medium};
  cursor: pointer;
`

const NavbarItem = props => {
  const { title, route, history } = props

  const changeLink = () => {
    history.push(route)
  }

  const isActive = history.location.pathname.includes(route) 
  // look into better solution

  return (
    
      <NavbarItemContainer isActive={isActive} onClick={changeLink}>{title}</NavbarItemContainer>
    
  )
}

export default withRouter(NavbarItem)
