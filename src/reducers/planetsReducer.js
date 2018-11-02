import { FETCH_PLANETS } from "../actions/types";

export default function(state = null, action) {    
    switch(action.type) {
        case FETCH_PLANETS: {
            return action.payload || false;
        }
        default: 
            return state;
    }
}