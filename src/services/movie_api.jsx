import axios from 'axios';

const API_KEY = 'b3c924fdd5f692c25a77af55ab3c1b33';

axios.defaults.baseURL= 'https://api.themoviedb.org/3/';
axios.defaults.params = {
    api_key: API_KEY,
};

// REFERENCE: https://developer.themoviedb.org/reference/trending-movies
export const fetchTrendingMovies = async () => {
    const response = await axios.get('trending/movie/day');
    //console.log(`fetchTrendingMovies response is ${response.data.results}`);
    return response.data.results;
};

// REFERENCE: https://developer.themoviedb.org/reference/search-movie
export const fetchMovieByQuery = async movieName => {
    const response = await axios.get(`search/movie?query=${movieName}`);
    //console.log(`fetchMovieByQuery response is ${response.data.results}`);
    return response.data.resutls;
};

// REFERENCE: https://developer.themoviedb.org/reference/movie-details
export const fetchMovieDetails = async movieId => {
    const response = await axios.get(`movie/${movieId}`);
    //console.log(`fetchMovieDetails response is ${response.data}`);
    return response.data;
};

// REFERENCE: https://developer.themoviedb.org/reference/movie-credits
export const fetchMovieCast = async movieId => {
    const response = await axios.get(`movie/${movieId}/credits?`);
    //console.log(`fetchMovieCast response is ${response.data.cast}`);
    return response.data.cast;
};

// REFERENCE: https://developer.themoviedb.org/reference/movie-reviews
export const fetchMovieReviews = async movieId => {
    const response  = await axios.get(`movie/${movieId}/reviews?`);
    //console.log(`fetchMovieReviews response is ${response.data.results}`);
    return response.data.results;
};



