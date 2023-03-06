import React, { useState } from 'react'
import { Icon } from '@iconify/react'


const SkillTile = ({ name, path }) => {
  const [hover, setHover] = useState(false)

  const handleStartHover = (e) => {
    setHover(true)
  }

  const handleEndHover = (e) => {
    setHover(false)
  }

  return (
    <div className={`tile ${hover ? 'hover' : ''}`}
      onMouseEnter={(e) => handleStartHover(e)}
      onMouseLeave={(e) => handleEndHover(e)}
    >
      <div className="icon">
        <Icon icon={path} />
      </div>
      <h4>{name}</h4>
    </div>
  )
}

export default SkillTile
