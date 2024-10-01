import './App.css'
import Header from './Header'
import Sections from './Sections/Sections'
import Footer from './Footer'
import SocialsSidebar from './SocialsBar'
import { ToastContainer } from 'react-toastify'


// Auto textarea resize
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}
//

function App() {


  return (
    <div className="App">
      <Header />
      <Sections />
      <SocialsSidebar />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
