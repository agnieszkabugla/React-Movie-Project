import { GET_INITIAL_STATE } from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
    case GET_INITIAL_STATE:
        if(action.payload) {
            return action.payload.data;
        }
        return state; 
    }
    return state;
}