import React from 'react';
import styled from '@emotion/styled';
import useNowPlayingMovie from './useNowPlayingMovie';
import Card from '../../../components/Card';
import Slider from '../../../components/Slider';

const Base = styled.div`
  margin-bottom: 42px;
  width: 100%;
  max-width: 100vw;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const NowPlayingMovieSection: React.FC = () => {
  const { data, isLoading } = useNowPlayingMovie();

  const getYear = (date: string) => date.split('-')[0];
  return (
    <Base>
      <Title>Recently Released</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Slider>
          {data.data.results.map((movie) => (
            <Card
              key={movie.id}
              linkUrl={`/movie/${movie.id}`}
              title={movie.title}
              year={getYear(movie.release_date)}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
              voteAverage={movie.vote_average}
            />
          ))}
        </Slider>
      )}
    </Base>
  );
};

export default NowPlayingMovieSection;
