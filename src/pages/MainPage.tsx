import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestMovieSecion from '../features/movie/latest';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <LatestMovieSecion />
      <Footer />
    </div>
  );
};

export default MainPage;
