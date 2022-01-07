import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

// import Container from './components/Layout/Container';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

const App = () => {
  return ( 

    <Router>
    <Navbar />
        <Routes>
                <Route exact path="/" element={<Home/>}>
                </Route>
                <Route exact path="/projects" element={<Projects/>}>
                </Route>
                <Route exact path="/company" element={<Company/>}>
                </Route>
                <Route exact path="/contact" element={<Contact/>}>
                </Route>
                <Route exact path="/newproject" element={<NewProject/>}>
                </Route> 
            
        </Routes>
        <Footer /> 
    </Router>

  )
}

export default App;
