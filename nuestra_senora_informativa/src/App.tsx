import {Route, BrowserRouter as Router, Routes } from "react-router-dom"
import './index.css'
import useRoutesConfig from "./Routes/routesConfig"
import { Suspense } from "react"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoadingSpinner from "./Components/LoadingSpinner";

function App() {
  const { isLoading, routes } = useRoutesConfig();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;