import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'





const Home = () => {

  const imgUrl = new URL(`../assets/headshot.png`, import.meta.url).href

  return (
    <Fade
      direction={"down"}
      triggerOnce={true}
    >
      <div id="home">
        <div className="left">
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
        </div>
        <div className="right">
          <img src={imgUrl} />
          <button onClick={""}>View My CV</button>
        </div>
      </div>
    </Fade>
  )
}

export default Home
