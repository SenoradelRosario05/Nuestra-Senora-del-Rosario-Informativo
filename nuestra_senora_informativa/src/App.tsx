import {BrowserRouter as Router } from "react-router-dom"
import Footer from "./Components/Footer"
import './index.css'
import Header from "./Components/Header"
import AppRouter from "./Routes/AppRouter"

function App() {
  
 return (
    <>
    <Router>
      <Header />
    <AppRouter />
      <Footer />
    </Router>
    </>
  )
}

export default App