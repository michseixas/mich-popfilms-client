import axios from 'axios';
let baseUrl = 'https://imdb-api.com/en/API';
let backendUrl = import.meta.env.VITE_API_URL + "/localimdb";


const getMovieDetails = (movieId) => {
   
    return axios.get(`https://imdb-api.com/en/API/Title/k_xmndj5an/${movieId}`)};

    

const getLikedMovies = (arrayMovieId) => {
        //arrayMovieId = ['236571', 'A3472R', '329898']
        let resMovies = arrayMovieId.map(movieId => {
            return getMovieDetails(movieId);
           
        })
        return Promise.all(resMovies)
    }
  

const getMoviesByType = (type) => {
    if (type === 'top250') {
        return axios.get(backendUrl + '/Top250Movies');
    } 
    else if (type === 'theater') {
        return axios.get(backendUrl + '/InTheaters');
    } 
    else if (type === 'mostpopular') {
        return axios.get(backendUrl + '/MostPopularMovies');
    } 
    else if (type === 'comingsoon') {
        return axios.get(backendUrl + '/ComingSoon');
    }
    else if (type === 'drama') {
        return axios.get('https://imdb-api.com/API/AdvancedSearch/k_xmndj5an/?title_type=feature&genres=drama') 
    } 
    else if (type === 'comedy') {
        return axios.get('https://imdb-api.com/API/AdvancedSearch/k_xmndj5an/?title_type=feature&genres=comedy') 
    }
    else if (type === 'action') {
        return axios.get('https://imdb-api.com/API/AdvancedSearch/k_xmndj5an/?title_type=feature&genres=action') 
    }
    else if (type === 'romance') {
        return axios.get('https://imdb-api.com/API/AdvancedSearch/k_xmndj5an/?title_type=feature&genres=romance') 
    }
    else if (type === 'animation') {
        return axios.get('https://imdb-api.com/API/AdvancedSearch/k_xmndj5an/?title_type=feature&genres=animation') 
    }
    else if (type === 'biography') {
        return axios.get('https://imdb-api.com/API/AdvancedSearch/k_xmndj5an/?title_type=feature&genres=biography') 
    }
    else if (type === 'adventure') {
        return axios.get('https://imdb-api.com/API/AdvancedSearch/k_xmndj5an/?title_type=feature&genres=adventure') 
    }
    else if (type === 'family') {
        return axios.get('https://imdb-api.com/API/AdvancedSearch/k_xmndj5an/?title_type=feature&genres=family') 
    } else {
        return Promise.reject(new Error("Invalid movie type"));
      }
};


export {getMoviesByType, getMovieDetails, getLikedMovies};    
