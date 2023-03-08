import React, { useState } from 'react'
import { Icon } from '@iconify/react'


const SocialSidebarIcons = ({ name, iconPath, index }) => {

  return (

    <div
      className={`single-social ${name.toLowerCase()}`}

      key={index}
    >

      <h3>{name}</h3>
      <Icon className="social-icon" icon={iconPath} />
    </div>


  )
}

export default SocialSidebarIcons
