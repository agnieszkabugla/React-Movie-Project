import { combineReducers } from 'redux';
import SearchResultsReducer from './reducer_searchResults'; 

const rootReducer = combineReducers({
    searchResults: SearchResultsReducer
});

export default rootReducer;