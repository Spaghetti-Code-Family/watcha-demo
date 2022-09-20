import React from 'react';
import styled from '@emotion/styled';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestMovieSecion from '../features/movie/latest';
import NowPlayingMovieSection from '../features/movie/nowPlaying';
import PopularMovieSection from '../features/movie/popular';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LatestMovieSecion />
          <NowPlayingMovieSection />
          <PopularMovieSection />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default MainPage;
