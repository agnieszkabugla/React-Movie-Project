import { FETCH_MOVIES } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
    case FETCH_MOVIES:
        // we cannot mutate the state by e.g using array.push
        // now we create a new state, containing previous state & new data collected from the action
        // can we create a new state without containing previous state?  
        return state = action.payload.data.results; 
        console.log("state: ", state); 
        // return state.concat([action.payload.data]); - it's the same as this one above
    }
    return state;
}