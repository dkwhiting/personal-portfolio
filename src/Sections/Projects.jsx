import React, { useEffect } from 'react'
import Project from './Project'
import { projects } from './projectData'

const Projects = () => {

  return (
    <div id="projects">
      <h2>My Projects</h2>
      {
        projects.map((project, index) => {
          return (
            <Project project={project} key={index} />
          )
        })
      }
    </div>
  )
}

export default Projects
