import axios from 'axios';

const key = '9300bf12d1efa3d214110c172e601b4c';
const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    language: 'en-US',
    api_key: key,
  },
});

export const fetchHomeTrending = async () => {
  const { data } = await instance.get('/trending/all/day');
  return data;
};

export const fetchSearch = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: query,
      // include_adult: false,
      // page: 1,
    },
  });
  return data;
};

export const fetchFullInfo = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}`);
  return data;
};

export const fetchActorInfo = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/credits`);
  return data;
};

export const fetchGetReviews = async movie_id => {
  const { data } = await instance.get(`movie/${movie_id}/reviews`);
  return data;
};
