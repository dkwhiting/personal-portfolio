import React from 'react'
import SkillTile from './SkillTile'
import { techs } from './projectData'
import { Fade } from 'react-awesome-reveal'

const Skills = () => {
  return (<>
    <div id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-tiles">
        {
          techs.map((skill, index) => {
            return (
              <Fade
                direction='up'
                triggerOnce='true'>
                <SkillTile name={skill.name} path={skill.path} />
              </Fade>
            )
          })
        }
      </div>
    </div>
  </>
  )
}

export default Skills
