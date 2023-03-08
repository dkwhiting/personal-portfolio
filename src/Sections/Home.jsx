import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'





const Home = () => {


  return (
    <Fade
      direction={"down"}
      triggerOnce={true}
    >
      <div id="home">
        <p className="">Hi, I'm </p>
        <h1 className="greeting">Dallin Whiting</h1>
        <h2 className="about">I'm a
          <div
            className="job-title"
            style={{ color: '#feb95f' }}
          > software engineer </div>
          and
          <div
            className="job-title"
            style={{ color: '#DB504A' }}
          > web developer
          </div>
        </h2>
        <button onClick={""}>View My CV</button>
      </div>
    </Fade>
  )
}

export default Home
