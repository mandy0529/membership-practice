import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '6e5e83e40bbc960162e2fcf42a1d5b9f',
    language: 'en-US',
  },
});
const basicApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '6e5e83e40bbc960162e2fcf42a1d5b9f',
  },
});
export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (word) =>
    api.get('search/movie', {
      params: {
        query: encodeURI(word),
      },
    }),
};

export const showApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (word) =>
    api.get('search/tv', {
      params: {
        query: encodeURI(word),
      },
    }),
};

export const companyApi = {
  company: (id) => basicApi.get(`company/${id}`),
};

export default api;
