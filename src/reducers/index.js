import { combineReducers } from "redux";
import peopleReducer from "./peopleReducer";
import planetsReducer from "./planetsReducer";
import speciesReducer from "./speciesReducer";
import gendersReducer from "./gendersReducer";

export default combineReducers({
    people: peopleReducer,
    planets : planetsReducer,
    species : speciesReducer,
    genders : gendersReducer
});