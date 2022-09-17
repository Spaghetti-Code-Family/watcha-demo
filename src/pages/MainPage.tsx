import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestMovieSecion from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlaying';
import PopularSection from '../features/movie/popular';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <LatestMovieSecion />
      <NowPlayingSection />
      <PopularSection />
      <Footer />
    </div>
  );
};

export default MainPage;
