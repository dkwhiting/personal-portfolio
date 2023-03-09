import React, { useEffect } from 'react'
import Project from './Project'
import { projects } from './projectData'

const Projects = () => {

  return (
    <>
      <div id="projects">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        <div className="project-tiles">
          {
            projects.map((project, index) => {
              return (
                <Project project={project} key={index} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Projects
