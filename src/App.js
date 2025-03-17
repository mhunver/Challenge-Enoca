
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import HomePage from "./pages/HomePage";

import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";





import './App.css';

import Head from "./components/header";
import CategoryPage from "./pages/CategoryPage";

import Footer from "./components/footer"


function App() {
  return (
    <Router>
      <Head />

 
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
         
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Category" element={<CategoryPage/>}/>
        </Routes>
      </div>

      <Footer/>

      
    </Router>

  );

}


export default App;


