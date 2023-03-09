import React from 'react'
import SocialSidebarIcons from './SocialSidebarIcons'
import { Fade } from 'react-awesome-reveal'

const SocialsSidebar = () => {
  const socialIcons = [
    {
      name: 'LinkedIn',
      iconPath: 'mdi:linkedin'
    },
    {
      name: 'GitHub',
      iconPath: 'mdi:github'
    },
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
                <SocialSidebarIcons name={icon.name} iconPath={icon.iconPath} index={index} />
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
