import React from 'react';
import styled from '@emotion/styled';
import useLatestMovie from './useLatestMovie';

const Base = styled.div``;

const Title = styled.h4``;

const LatestMovieSecion: React.FC = () => {
  const { data, isLoading } = useLatestMovie();
  return (
    <Base>
      <Title>Recently Released</Title>
      {isLoading ? <div>Loading...</div> : <div>{data?.data.title}</div>}
    </Base>
  );
};

export default LatestMovieSecion;
