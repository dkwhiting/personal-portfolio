import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'


const SocialSidebarIcons = ({ name, iconPath, index }) => {
  const [hover, setHover] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const element = document.querySelector(`.${name.toLowerCase()}`)
    setWidth(element.offsetWidth)
  }, [])

  const handleMouseEnter = (e) => {
    setHover(true)
  }

  const handleMouseLeave = (e) => {
    setHover(false)
  }

  return (

    <div
      className={`single-social ${name.toLowerCase()} ${hover ? 'hover' : ''}`}
      style={hover ? { transform: `translateX(${width - 10}px)` } : null}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      key={index}
    >

      <h3>{name}</h3>
      <Icon className="social-icon" icon={iconPath} />
    </div>


  )
}

export default SocialSidebarIcons
