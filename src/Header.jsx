import React from 'react'
import HeaderLink from './HeaderLink'

const Header = () => {
  const headerLinks = [
    {
      title: 'Home',
    },
    {
      title: 'About',
    },
    {
      title: 'Projects',
    },
    {
      title: 'Contact',
    },
  ]

  return (
    <div id="header">
      {
        headerLinks.map((link, i) => {
          return (
            <HeaderLink title={link.title} id={i} />
          )
        })
      }
    </div>
  )
}

export default Header
