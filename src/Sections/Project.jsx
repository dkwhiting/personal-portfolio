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
        <div className="left">
          <img src={project.imgPath} alt={`${project.name} image`} />
        </div>
        <div className="right">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </Fade>
  )
}

export default Project
