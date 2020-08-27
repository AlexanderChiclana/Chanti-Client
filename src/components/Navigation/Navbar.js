import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, navbar } from '../../theme.js'
import NavbarItem from './NavbarItem.js'


const NavContainer = styled.div`
  height: 100vh;
  z-index: 200;
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

const NavBar = () => {
  const [books ] = useState([
    {
      route: 'torah', 
      title:'Torah'
    }, 
    {
      route: 'lamentation', 
      title:'Lamentation'
    }, 
    {
      route: 'hhd', 
      title:'HHD Torah'
    }, 
    {
      route: 'esther', 
      title:'Esther'
    }, 
    {
      route: 'haftarah', 
      title:'Haftarah'
    }, 
    {
      route: 'ruth', 
      title:'Ruth'
    }
  ])

  
  return ( 
    <NavContainer>
    <ProfileContainer></ProfileContainer>
    {books.map((book, index)=> <NavbarItem key={index} route={book.route} title={book.title}/>)}

  </NavContainer>
   );
}
 

export default NavBar
