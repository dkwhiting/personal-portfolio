import React, { useState } from 'react'

const HeaderLink = ({ title, setToggleView, i }) => {
  const [isActive, setIsActive] = useState(false)
  const [hover, setHover] = useState()

  const handleStartHover = (e) => {
    setHover(true)
  }

  const handleEndHover = (e) => {
    setHover(false)
  }

  const handleClick = () => {
    console.log('title:', title)
    const element = document.getElementById(title.toLowerCase())
    console.dir(element)
    element.scrollIntoView({ behavior: 'smooth' })
    setToggleView(false)
  }

  return (
    <div key={i} className={`header-link ${isActive ? 'active' : ''} `}
      onClick={handleClick}
      onMouseEnter={handleStartHover}
      onMouseLeave={handleEndHover}>
      <a

      >{title}</a>
      <div className={`bottom-border ${hover ? 'hover' : ''}`} />
    </div >
  )
}

export default HeaderLink
