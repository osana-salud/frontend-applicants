import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { localPath } from '../../constantes'

export default function Home() {
  return (
    <div>
      <NavLink to={localPath.SEARCH_GIT} >Buscar Usuario</NavLink>
      {
        <Redirect to={localPath.SEARCH_GIT}></Redirect>
      }
    </div>
  )
}
