import React from 'react'
import SkillTile from './SkillTile'
import { techs } from './projectData'

const Skills = () => {
  return (<>
    <div id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-tiles">
        {
          techs.map((skill, index) => {
            return (
              <SkillTile name={skill.name} path={skill.path} />
            )
          })
        }
      </div>
    </div>
  </>
  )
}

export default Skills
