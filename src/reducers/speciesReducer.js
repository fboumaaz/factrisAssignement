import { FETCH_SPECIES } from "../actions/types";

export default function(state = null, action) {    
    switch(action.type) {
        case FETCH_SPECIES: {
            return action.payload || false;
        }
        default: 
            return state;
    }
}