import Header from "./components/Header"
import Footer from "./components/footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {Routes,Route} from 'react-router-dom'


function App() {
 

  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
      <h1>My first react app</h1>
      <h4>created by Keerthana</h4>
      <Footer></Footer>
    </div>
    
  )
}

export default App
