import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestMovieSecion from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlaying';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <LatestMovieSecion />
      <NowPlayingSection />
      <Footer />
    </div>
  );
};

export default MainPage;
