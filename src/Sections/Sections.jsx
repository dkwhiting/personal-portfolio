import React from 'react'
import {
  Home,
  About,
  Projects,
  Contact
} from './'

const Sections = () => {

  return (
    <div id="sections">
      <div className="section">
        <Home />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Contact />
      </div>
    </div>
  )
}

export default Sections
