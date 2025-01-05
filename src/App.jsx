import Navbar from "./Components/Navbar"
import './App.css';


import Footer from "./Components/Footer";
import { ContextProvider } from "./context/ContextData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category";
import About from "./Components/About";
import { Missing } from "./Components/Missing";


const App = () => {


  return (
    <BrowserRouter>
      <div className="app">
        <ContextProvider>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Missing />} />
            </Routes>

          </div>



          <Footer />
        </ContextProvider>
      </div>
    </BrowserRouter>
  )
}

export default App