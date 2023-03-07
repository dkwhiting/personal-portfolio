import React from 'react'
import { Fade } from 'react-awesome-reveal'





const Home = () => {

  return (
    <Fade
      direction={"down"}
      triggerOnce={true}
    >
      <div id="home">
        <h1 className="greeting">Hi, I'm Dallin</h1>
        <p className="about">I'm a software engineer and web developer</p>
        <button onClick={""}>View My CV</button>
      </div>
    </Fade>
  )
}

export default Home
