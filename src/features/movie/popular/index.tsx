import React from 'react';
import styled from '@emotion/styled';
import usePopularMovie from './usePopularMovie';
import Card from '../../../components/Card';
import Slider from '../../../components/Slider';

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const PopularMovieSection: React.FC = () => {
  const { data, isLoading } = usePopularMovie();

  const getYear = (date: string) => date.split('-')[0];
  return (
    <Base>
      <Title>Popular Movies</Title>
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

export default PopularMovieSection;
