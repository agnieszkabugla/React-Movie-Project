import { FETCH_MOVIES } from '../actions/index';

export default function (state = [], action) {
    // console.log('oldstate: ', state);
    switch (action.type) {
    case FETCH_MOVIES:
        // we cannot mutate the state by e.g using array.push
        // now we create a new state, containing previous state & new data collected from the action
        // can we create a new state without containing previous state?
        if(action.payload && action.payload.data) {
            return action.payload.data.results;
        } else {
            return state;
        }
        
        // return state.concat([action.payload.data]); - it's the same as this one above
    }
    return state;
}