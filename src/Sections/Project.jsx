import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Project = ({ project }) => {

  console.log(project.imgPath)
  return (
    <Fade
      direction={"up"}
      triggerOnce={true}
    >
      <div className="project">
        <img src={project.imgPath} alt={`${project.name} image`} />
        <div className="project-overlay">

        </div>
      </div>
    </Fade>
  )
}

export default Project
