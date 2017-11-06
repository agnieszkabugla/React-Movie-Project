import { combineReducers } from 'redux';
import SearchResultsReducer from './reducer_searchResults'; 
import SelectedMovieReducer from './reducer_selectedMovie';
import SelectedMovieByIdReducer from './reducer_selectedMovieById'; 

const rootReducer = combineReducers({
    searchResults: SearchResultsReducer,
    selectedMovie: SelectedMovieReducer,
    selectedMovieById: SelectedMovieByIdReducer
});

export default rootReducer;