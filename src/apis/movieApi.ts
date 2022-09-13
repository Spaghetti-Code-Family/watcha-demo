import axiosInstance from './index';

export const latestApi = () => axiosInstance.get('/movie/latest');

export const nowplayingApi = () => axiosInstance.get('movie/now_playing');

export const popularApi = () => axiosInstance.get('/movie/popular');

export const topRatedApi = () => axiosInstance.get('/movie/top_rated');

export const upcomingApi = () => axiosInstance.get('/movie/upcoming');

export const detailApi = (movieId: string) =>
  axiosInstance.get(`/movie/${movieId}`);

export const similarAPi = (movieId: string) =>
  axiosInstance.get(`/movie/${movieId}/similar`);

export const searchApi = (query: string) =>
  axiosInstance.get(`/search/movie?query=${query}`);
