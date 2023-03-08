import React, { useState } from 'react'
import { Icon } from '@iconify/react'


const SkillTile = ({ name, path }) => {


  return (
    <div className="tile">
      <div className="icon">
        <Icon icon={path} />
      </div>
      <h4>{name}</h4>
    </div>
  )
}

export default SkillTile
