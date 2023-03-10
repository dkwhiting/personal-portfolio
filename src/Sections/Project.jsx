import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Icon } from '@iconify/react'

const Project = ({ project, i }) => {
  const imgUrl = new URL(`../assets/${project.imgPath}`, import.meta.url).href
  return (
    <Fade
      direction={"up"}
      triggerOnce={true}
      className='project'
      key={i}
    >


      {/* <img src={imgUrl} alt={`${project.name} image`} /> */}
      <div>
        <div className="project-title">
          <h2>{project.name}</h2>
        </div>
        <div className="project-description">
          {project.description}
        </div><div className="project-bottom">
          <div className="tech-stack">
            {
              project.techStack.map((tech, index) => {
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
          <div className="project-buttons">
            {
              project.liveURL
                ? <a href={project.liveURL} target="_blank">
                  <div className="btn-blue">
                    <Icon icon="heroicons-outline:external-link" />Live
                  </div>
                </a>
                : null
            }
            {
              project.repoURL
                ? <a href={project.repoURL} target="_blank">
                  <div className="btn-red-outline">
                    <Icon icon='bi:github' />Code
                  </div>
                </a>
                : null
            }
          </div>
        </div>
      </div>


    </Fade>
  )
}

export default Project
