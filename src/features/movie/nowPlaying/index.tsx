import React from 'react';
import styled from '@emotion/styled';
import useNowPlayingMovie from './useNowPlayingMovie';
import Card from '../../../components/Card';
import Slider from '../../../components/Slider';

const Base = styled.div``;

const Title = styled.h4``;

const NowPlayingSection: React.FC = () => {
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

export default NowPlayingSection;
