import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'





const Home = () => {


  const imgUrl = new URL(`../assets/headshot.png`, import.meta.url).href

  return (
    <>
      <div className="status-indicator">
        <div className="led green"></div>
        <p>Looking for Work</p>
      </div>
      <div id="home">
        <Fade
          direction={"down"}
          triggerOnce={true}
        >
          <div className="intro">
            <h2 className="med top">Welcome, I'm</h2>
            <h1 className="lg middle">Dallin Whiting</h1>
            <h2 className="med bottom">Full Stack Developer</h2>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Home
