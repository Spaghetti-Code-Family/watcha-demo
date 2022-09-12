import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Switch is now replaced to Routes per v6
// no exact is needed
import { MainPage, MovieDetail, TvDetail, TvPage } from './pages/pages.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tv/:id" element={<TvDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
