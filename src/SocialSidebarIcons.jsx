import React, { useState } from 'react'
import { Icon } from '@iconify/react'


const SocialSidebarIcons = ({ name, iconPath, index }) => {
  const [hover, setHover] = useState(false)

  const handleStartHover = (e) => {
    setHover(true)
  }

  const handleEndHover = (e) => {
    setHover(false)
  }

  return (

    <div
      className={`single-social ${name} ${hover ? 'hover' : ''}`}
      onMouseEnter={(e) => handleStartHover(e)}
      onMouseLeave={(e) => handleEndHover(e)}
      key={index}
    >

      <h3>{name}</h3>
      <Icon className="social-icon" icon={iconPath} />
    </div>


  )
}

export default SocialSidebarIcons
