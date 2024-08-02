import React from 'react'

export const Footer = () => {
  let fecha = new Date().getFullYear();

  return (
    <footer className='footer'>Portafolio Joaquín Lafuente Espino &copy; Master en React - {fecha}</footer>
  )
}
