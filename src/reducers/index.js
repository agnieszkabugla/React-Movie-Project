import { combineReducers } from 'redux';
import SearchResultsReducer from './reducer_searchResults'; 
import SelectedMovieReducer from './reducer_selectedMovie';

const rootReducer = combineReducers({
    searchResults: SearchResultsReducer,
    selectedMovie: SelectedMovieReducer
});

export default rootReducer;