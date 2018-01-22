import { GET_INITIAL_PAGE, SELECT_MOVIE } from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
    case GET_INITIAL_PAGE:
        if(action.payload) {
            // console.log('reducer ', action.payload);
            return action.payload;
        }
        return state; 
    case SELECT_MOVIE:
        //console.log('reducer', action.payload); 
        return action.payload; 
    }
    return state;
}