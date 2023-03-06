import React from 'react'

const Project = ({ project }) => {

  console.log(project.imgPath)
  return (
    <div className="project">
      <div className="left">
        <img src={project.imgPath} alt={`${project.name} image`} />
      </div>
      <div className="right">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default Project
