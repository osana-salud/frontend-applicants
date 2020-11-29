import React from 'react'
import { Nav } from 'react-bootstrap'
import {
  NavLink
} from 'react-router-dom'
import { localPath } from '../../constantes'

const Header = () => {
  return (
    <Nav>
      {/* <Nav.Item>
        <NavLink to={localPath.ROOT} >home</NavLink>
      </Nav.Item> */}
      <Nav.Item>
        <NavLink to={localPath.SEARCH_GIT} >Busqueda de usuario</NavLink>
      </Nav.Item>
    </Nav>
  )
}

export default Header
