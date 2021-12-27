import React, {Fragment}from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

function App() {

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <Fragment>
      <Routes>
        <Route exact path="/" element={Home}>
         {/*  <Home /> */}
        </Route>
        <Route path="/empresa" element={Empresa}>
         {/*  <Empresa /> */}
        </Route>
        <Route path="/contato" element={Contato}>
         {/*  <Contato /> */}
        </Route>
      </Routes>
      </Fragment>
    </Router>
  )
}

export default App;
