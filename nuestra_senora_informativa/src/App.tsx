import {BrowserRouter as Router } from "react-router-dom"
import Footer from "./Components/Footer"
import MainPage from "./Pages/MainPage/MainPage"
import './index.css'

function App() {
  
 return (
    <>
    <Router>
    <MainPage />
      <Footer />
    </Router>
    </>
  )
}

export default App
