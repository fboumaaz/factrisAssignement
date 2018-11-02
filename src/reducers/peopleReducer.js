import { FETCH_PEOPLE, FETCH_PEOPLE_BY_PLANET, FETCH_PEOPLE_BY_SPECIES, GET_PEOPLE_PLANET, FETCH_PEOPLE_BY_GENDER } from "../actions/types";
import _ from 'underscore';
export default function(state = null, action) {    
    switch(action.type) {
        case FETCH_PEOPLE: {
            return { ...state, allPeople: action.payload , filter:{planet : false,species : false , gender : false}, loadingPeople: true}            
        }
        case FETCH_PEOPLE_BY_PLANET: {          
            const urlPlanet = action.payload;            
            return { ...state, peopleByPlanet: _.filter(state.allPeople.results, person => person.homeworld === urlPlanet), filter: { planet: true },loadingPlanets : true }             
           //return Object.assign({}, state, { peopleByPlanet: _.filter(state, person => person.homeworld === url) })
        }
        case FETCH_PEOPLE_BY_SPECIES: {          
            const url = action.payload;            
            return { ...state, peopleBySpecies: _.filter(state.allPeople.results, person => person.species[0] === url), filter: { species: true }, loadingSpecies : true }             
           //return Object.assign({}, state, { peopleByPlanet: _.filter(state, person => person.homeworld === url) })
        }
        case GET_PEOPLE_PLANET : {
            return { ...state, peopleplanet: action.payload , loadingPeoplePlanet : true} 
        }
        case FETCH_PEOPLE_BY_GENDER : {
            const gender = action.payload;            
            return { ...state, peopleByGender: _.filter(state.allPeople.results, person => person.gender === gender), filter: { gender: true }, loadingGender : true }
        }

        default: 
            return state;
    }
}
// return { ...state, postsList: {posts: action.payload, error:null, loading: false} };
