import React from 'react'
import HeaderLink from './HeaderLink'
import Logo from './Logo'

const Header = () => {
  const headerLinks = [
    {
      title: 'Home',
    },
    {
      title: 'Skills',
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
      <div >
        <Logo />
      </div>
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
