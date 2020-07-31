import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, navbar } from '../../theme.js'
import NavbarItem from './NavbarItem.js'

const NavContainer = styled.div`
  height: 100vh;
  z-index: 100;
  width: ${navbar.width};
  position: fixed;
  background-color: ${colors.black};
  left: 0;

  .isActive + div {
      border-top: 0px;
  };
  
`
const ProfileContainer = styled.div`
  height: 120px;
`

class Navbar extends Component {
  render() {
    return (
      <NavContainer>
        <ProfileContainer></ProfileContainer>
        <NavbarItem title="Torah" />
        <NavbarItem isActive={true} title="Lamentation" />
        <NavbarItem title="HHD Torah" />
        <NavbarItem title="Ruth" />
        <NavbarItem title="Esther" />
      </NavContainer>
    )
  }
}

export default Navbar
