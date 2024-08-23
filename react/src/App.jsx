// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import CountryDetails from './Components/CountryDetails.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:cca3" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
