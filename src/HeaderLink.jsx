import React, { useState, useEffect } from 'react'

const HeaderLink = ({ title }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {

    console.dir(element)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`header-link ${isActive ? 'active' : ''}`}>
      <a onClick={handleClick}>{title}</a>
    </div >
  )
}

export default HeaderLink
