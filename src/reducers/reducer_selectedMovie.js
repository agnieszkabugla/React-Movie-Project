import { GET_INITIAL_STATE } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
    case GET_INITIAL_STATE:
        return state; 
    }
    return state;
}