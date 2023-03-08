import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Icon } from '@iconify/react'

const Project = ({ project }) => {
  const imgUrl = new URL(`../assets/${project.imgPath}`, import.meta.url).href
  return (
    <div className="project">
      <Fade
        direction={"up"}
        triggerOnce={true}
      >

        <img src={imgUrl} alt={`${project.name} image`} />
        <div className="project-bottom">
          <div className="project-header">
            <div className="project-title">
              <h2>{project.name}</h2>
            </div>
            <div className="project-buttons">
              {
                project.liveURL
                  ? <div className="btn-blue">
                    <Icon icon="heroicons-outline:external-link" /><a href={project.liveURL} target="_blank">Live</a>
                  </div>
                  : null
              }
              {
                project.repoURL
                  ? <div className="btn-blue-outline">
                    <Icon icon='bi:github' /><a href={project.repoURL} target="_blank">Code</a>
                  </div>
                  : null
              }
            </div>
          </div>
          <div className="project-description">
            {project.description}
          </div>
          <div className="tech-stack">
            {
              project.techStack.map((tech, index) => {
                console.log(tech)
                return (
                  <div className="single-tech">
                    <div className="tech-name">
                      {tech.name}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Project
