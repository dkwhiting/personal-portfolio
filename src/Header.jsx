import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import HeaderLink from './HeaderLink'
import Logo from './Logo'

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

const Header = () => {
  const [toggleView, setToggleView] = useState(false)


  return (
    <div id="header" className={toggleView ? 'expand' : ''}>
      <div className="logo">
        <Logo />
      </div>

      <div className="header-links-big">
        {
          headerLinks.map((link, i) => {
            return (
              <HeaderLink title={link.title} i={i} />
            )
          })
        }
      </div>


      <div className={`header-links-small ${toggleView ? 'show' : ''}`}>
        <div
          id="expand-button"
          className={toggleView ? 'open' : ''}
          onClick={() => setToggleView(!toggleView)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="links-container">
          {
            headerLinks.map((link, i) => {
              return (
                <HeaderLink title={link.title} setToggleView={setToggleView} i={i} />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Header
