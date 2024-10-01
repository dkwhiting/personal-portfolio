import React from 'react'
import {
  Home,
  Skills,
  Projects,
  Contact
} from './'

const Sections = () => {

  return (
    <div id="sections">
      <section>
        <Home />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  )
}

export default Sections
