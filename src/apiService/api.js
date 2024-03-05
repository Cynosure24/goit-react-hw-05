import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "85fb6679c5ff7e12f39e3f37d8ea77b2";

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrending = async () => {
  const url = "/trending/movie/day";
  const options = {
    params: {
      language: "en-US",
    },
  };

  try {
    const response = await instance.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This didn't work.");
    throw error;
  }
};

export const getMovieById = async (movieId) => {
  const url = `/movie/${movieId}`;
  const options = {
    params: {
      language: "en-US",
    },
  };

  try {
    const response = await instance.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This didn't work.");
    throw error;
  }
};

export const getReviews = async (movieId) => {
  const url = `/movie/${movieId}/reviews`;
  const options = {
    params: {
      language: "en-US",
      page: 1,
    },
  };

  try {
    const response = await instance.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This didn't work.");
    throw error;
  }
};

export const getCast = async (movieId) => {
  const url = `/movie/${movieId}/credits`;
  const options = {
    params: {
      language: "en-US",
    },
  };

  try {
    const response = await instance.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This didn't work.");
    throw error;
  }
};

export const getSearchResults = async (query) => {
  const url = "/search/movie";

  const options = {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  };

  try {
    const response = await instance.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This didn't work.");
    throw error;
  }
};
