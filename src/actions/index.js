import axios from 'axios'; 

const API_KEY = 'ba97ad63d202b24bf9b8e972f25ea9f1'; 
const mainURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=[searchterm]`; 
const popularityURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const getMoviedetailsURL = `https://api.themoviedb.org/3/movie/[selectedMovieId]?api_key=${API_KEY}&append_to_response=videos`;

// ACTION SENDING AN API REQUEST TO GET MOST POPULAR MOVIE AT THE MOMENT
// IT DISPATCHES ONLY THE FIRST POPULAR MOVIE FROM THE RESULTS LIST
export const GET_INITIAL_PAGE = 'GET_INITIAL_PAGE'; 
export function getInitialPage() {
    const request = axios.get(popularityURL);

    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({ type: GET_INITIAL_PAGE, payload: data.results[0] });
        }); 
    }; 
}

//ACTION THAT SENDS AN API REQUEST BASED ON A SEARCHTERM 
export const FETCH_MOVIES = 'FETCH_MOVIES'; 
export function fetchMovies(movie) {
    //creating a new url suitable for query search 
    let searchTerm = movie.replace('', '+'); 
    const newURL = mainURL.replace('[searchterm]', searchTerm);
    const request = axios.get(newURL); 
    
    return {
        type: FETCH_MOVIES,
        payload: request
    };
}

//ACTION THAT SELECTS MOVIE FROM MOVIE LIST
export const SELECT_MOVIE = 'SELECT_MOVIE';
export function selectMovie(movie) {
    //console.log("selected movie", movie); 
    return {
        type: SELECT_MOVIE,
        payload: movie
    };
}

//ACTION THAT SENDS API REQUEST TO GET MORE DETAILS 
// API REQUEST IS BASED ON SELECTED MOVIE ID
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS'; 
export function getMovieDetails(movieId) {
    //console.log('getMovieDetails called! movieId: ', movieId);
    const newURL = getMoviedetailsURL.replace('[selectedMovieId]', movieId);
    const request = axios.get(newURL);
    
    return {
        type: GET_MOVIE_DETAILS,
        payload: request
    }; 
}