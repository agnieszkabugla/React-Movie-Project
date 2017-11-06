import { GET_INITIAL_PAGE } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
    case GET_INITIAL_PAGE:
        if(action.payload) {
            console.log('reducer ', action.payload);
            return action.payload;
        }
        return state; 
    }
    return state;
}