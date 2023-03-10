import React, { useEffect, useState } from 'react'
import SocialSidebarIcons from './SocialSidebarIcons'
import { Fade } from 'react-awesome-reveal'

const SocialsSidebar = () => {


  const socialIcons = [
    {
      name: 'LinkedIn',
      iconPath: 'mdi:linkedin',
      linkPath: 'https://www.linkedin.com/in/dallinwhiting/'
    },
    {
      name: 'GitHub',
      iconPath: 'mdi:github',
      linkPath: 'https://github.com/dkwhiting/'
    },
    {
      name: 'Resume',
      iconPath: 'mdi:resume',
      linkPath: 'resume.pdf'
    }
  ]


  return (
    <div id="socials-sidebar">
      <Fade
        direction={"left"}
        triggerOnce={true}
      >

        <div className="social-sliders">
          {
            socialIcons.map((icon, index) => {
              return (
                <SocialSidebarIcons name={icon.name} linkPath={icon.linkPath} iconPath={icon.iconPath} index={index} />
              )
            })
          }

        </div>
        <div className="socials-spacer"></div>
      </Fade>
    </div>
  )
}

export default SocialsSidebar
