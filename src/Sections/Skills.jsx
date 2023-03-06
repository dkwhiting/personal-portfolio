import React from 'react'
import SkillTile from './SkillTile'

const Skills = () => {

  const skillsIcons = [
    {
      name: "JavaScript",
      path: "skill-icons:javascript"
    },
    {
      name: "TypeScript",
      path: "skill-icons:typescript"
    },
    {
      name: "React",
      path: "logos:react"
    },
    {
      name: "Redux",
      path: "skill-icons:redux"
    },
    {
      name: "Node.js",
      path: "vscode-icons:file-type-node"
    },
    {
      name: "Express",
      path: "simple-icons:express"
    },

    {
      name: "HTML",
      path: "vscode-icons:file-type-html"
    },
    {
      name: "CSS",
      path: "vscode-icons:file-type-css"
    },
    {
      name: "Git",
      path: "mdi:git"
    },
    {
      name: "PostgreSQL",
      path: "logos:postgresql"
    },
    {
      name: "MySQL",
      path: "logos:mysql"
    },
    {
      name: "REST API",
      path: "vscode-icons:file-type-rest"
    },

  ]

  console.log(skillsIcons[0].path)

  return (<>
    <h2 className="section-title">My Skills</h2>
    <div id="skills">
      {
        skillsIcons.map((skill, index) => {
          return (
            <SkillTile name={skill.name} path={skill.path} />
          )
        })
      }
    </div>
  </>
  )
}

export default Skills
