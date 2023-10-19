import axios from 'axios';
let baseUrl = 'https://api.themoviedb.org/';
let tmdb_key = import.meta.env.VITE_TMDB_KEY ;


const getMovieDetails = (movieId) => {
   
    return axios.get(baseUrl + `3/movie/${movieId}?api_key=${tmdb_key}`)};
    // return axios.get(`https://imdb-api.com/en/API/Title/k_xmndj5an/${movieId}`)};

    

const getLikedMovies = (arrayMovieId) => {
        //arrayMovieId = ['236571', 'A3472R', '329898']
        let resMovies = arrayMovieId.map(movieId => {
            return getMovieDetails(movieId);
           
        })
        return Promise.all(resMovies)
    }
  

const getMoviesByType = (type) => {
    if (type === 'top250') {
        return axios.get(baseUrl + `/3/movie/top_rated?api_key=${tmdb_key}`);
    } 
    else if (type === 'theater') {
        return axios.get(baseUrl + `/3/movie/now_playing?api_key=${tmdb_key}`);
    } 
    else if (type === 'mostpopular') {
        return axios.get(baseUrl + `/3/movie/popular?api_key=${tmdb_key}`);
    } 
    else if (type === 'comingsoon') {    
        return axios.get(baseUrl + `/3/movie/upcoming?api_key=${tmdb_key}`);
    }
    else if (type === 'drama') {   
        return axios.get(baseUrl + `/3/discover/movie?api_key=${tmdb_key}&with_genres=18`) 
    } 
    else if (type === 'comedy') {
        return axios.get(baseUrl + `/3/discover/movie?api_key=${tmdb_key}&with_genres=35`) 
    }
    else if (type === 'action') {
        return axios.get(baseUrl + `/3/discover/movie?api_key=${tmdb_key}&with_genres=28`) 
    }
    else if (type === 'romance') {
        return axios.get(baseUrl + `/3/discover/movie?api_key=${tmdb_key}&with_genres=10749`) 
    }
    else if (type === 'animation') {
        return axios.get(baseUrl + `/3/discover/movie?api_key=${tmdb_key}&with_genres=16`) 
    }
    else if (type === 'documentary') {
        return axios.get(baseUrl + `/3/discover/movie?api_key=${tmdb_key}&with_genres=99`) 
    }
    else if (type === 'adventure') {
        return axios.get(baseUrl + `/3/discover/movie?api_key=${tmdb_key}&with_genres=12`) 
    }
    else if (type === 'family') {
        return axios.get(baseUrl + `/3/discover/movie?api_key=${tmdb_key}&with_genres=10751`) 
    } else {
        return Promise.reject(new Error("Invalid movie type"));
      }
};


export {getMoviesByType, getMovieDetails, getLikedMovies};    
