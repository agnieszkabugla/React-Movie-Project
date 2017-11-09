import { GET_MOVIE_DETAILS } from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
    case GET_MOVIE_DETAILS:
        if(action.payload) {
            console.log('reducer::: ', action.payload);
            return action.payload.data;
        }
        return state; 
    }
    return state;
}