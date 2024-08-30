import {BrowserRouter as Router } from "react-router-dom"
import Footer from "./Components/Footer"
import MainPage from "./Pages/MainPage/MainPage"
import './index.css'
import Header from "./Components/Header"

function App() {
  
 return (
    <>
    <Router>
      <Header />
    <MainPage />
      <Footer />
    </Router>
    </>
  )
}

export default App
