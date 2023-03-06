import React, { useState } from 'react'

const HeaderLink = ({ title }) => {
  const [isActive, setIsActive] = useState(false)
  const [hover, setHover] = useState()

  const handleStartHover = () => {
    const hover = () => {
      setTimeout
    }


  }

  const handleEndHover = () => {


  }

  const handleClick = () => {
    console.log('title:', title)
    const element = document.getElementById(title.toLowerCase())
    console.dir(element)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`header-link ${isActive ? 'active' : ''} `}>
      <a
        onClick={handleClick}
        onMouseEnter={handleStartHover}
        onMouseLeave={handleEndHover}
      >{title}</a>
    </div >
  )
}

export default HeaderLink
