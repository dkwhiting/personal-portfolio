import './App.css'
import Header from './Header'
import Sections from './Sections/Sections'
import Footer from './Footer'
import { Fade } from 'react-awesome-reveal'


function App() {


  return (
    <div className="App">
      <Fade
        direction={"down"}
        triggerOnce={true}
      >
        <Header />
      </Fade>
      <Fade direction={"up"}
        triggerOnce={true}
      >
        <Sections />
      </Fade>

      <Footer />
    </div>
  )
}

export default App
