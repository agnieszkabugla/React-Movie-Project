import { combineReducers } from 'redux';
import SearchResultsReducer from './reducer_searchResults'; 
import SelectedMovieReducer from './reducer_selectedMovie';
import SelectedMovieByIdReducer from './reducer_selectedMovieById';
//import ImdbReducer from './reducer_IMDB_results';  

const rootReducer = combineReducers({
    searchResults: SearchResultsReducer,
    selectedMovie: SelectedMovieReducer,
    selectedMovieById: SelectedMovieByIdReducer
    //ImdbDetails: ImdbReducer
});

export default rootReducer;