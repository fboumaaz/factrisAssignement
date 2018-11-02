import axios from 'axios';
import { FETCH_PEOPLE, FETCH_PEOPLE_BY_PLANET, FETCH_PEOPLE_BY_SPECIES, GET_PEOPLE_PLANET, FETCH_PEOPLE_BY_GENDER, FETCH_GENDERS } from './types';
import { FETCH_PLANETS } from './types';
import { FETCH_SPECIES } from './types';
//  import apiClient from '../mock-client/MockAxios';
import _ from 'underscore';



export const filterPeopleByPlanet = (urlPlanet) => async dispatch => {
    try{      
        dispatch({ type: FETCH_PEOPLE_BY_PLANET, payload: urlPlanet });
    } catch(err){
        console.log('Error => ', err);
    }  
    // response is returned in the parameter       
    
}
export const filterPeopleByGender = (gender) => async dispatch =>{
    try{
        dispatch({ type: FETCH_PEOPLE_BY_GENDER, payload: gender });
    }catch(err){
        console.log('Error => ', err)
    }
}
export const getNextPeople = (urlNext) => async dispatch =>{
    try{        
        const res = await axios.get(urlNext);    
        const people = res.data;
        dispatch({ type: FETCH_PEOPLE, payload: people});                     
    } catch(err){
        console.log('Error => ', err);
    }
}
export const getPreviousPeople = (urlPrevious) => async dispatch =>{
    try{
        const res = await axios.get(urlPrevious);    
        const people = res.data;
        dispatch({ type: FETCH_PEOPLE, payload: people});         
    } catch(err){
        console.log('Error => ',err)
    }
}
export const getPeoplePlanet = (urlPlanet) => async dispatch => {
   
    try{        
        const res = await axios.get(urlPlanet);    
        const planet = res.data;
        dispatch({ type: GET_PEOPLE_PLANET, payload: planet })
                     
    } catch(err){
        console.log('Error => ', err);
    }   
    // response is returned in the parameter       
    
}
export const filterPeopleBySpecies = (urlSpecies) => async dispatch => {
    try{      
        dispatch({ type: FETCH_PEOPLE_BY_SPECIES, payload: urlSpecies });
    } catch(err){
        console.log('Error => ', err);
    }  
    // response is returned in the parameter       
    
}
export const fetchPlanets = () => async dispatch => {
    try{        
        const res = await axios.get('https://swapi.co/api/planets');    
        const planets = res.data.results;
        dispatch({ type: FETCH_PLANETS, payload: planets })
                     
    } catch(err){
        console.log('Error => ', err);
    }  
    // response is returned in the parameter       
    
}

export const fetchSpecies = () => async dispatch => {
    try{        
        const res = await axios.get('https://swapi.co/api/species');    
        const species = res.data.results;
        dispatch({ type: FETCH_SPECIES, payload: species })
    } catch(err){
        console.log('Error => ', err);
    }  
    
}
export const fetchGenders = () => async dispatch =>{
    var res = await axios.get('https://swapi.co/api/people');    
    var people = res.data;
    var next = res.data.next;
    var genders = [];
    do{
       genders.push(_.pluck(people.results,'gender'));
       res = await axios.get(next);
       people = res.data;
       next = res.data.next;
    }while (next!=null);
    genders = _.uniq(_.flatten(genders));
    dispatch({ type: FETCH_GENDERS, payload: genders});

}
export const fetchPeople = (url) => async dispatch => {
    try{        

        const res = await axios.get('https://swapi.co/api/people');    
        const people = res.data;
        dispatch({ type: FETCH_PEOPLE, payload: people});
        //const allPersons = [];
       /*  const done = async function(i){            
            const person = people[i];
            try{
                const planet = person ? await axios.get(person.homeworld) : '';                            
                if(person) {
                    person.homeworld = planet.data ;
                    allPersons.push(person);
                }
                if(i < people.length){
                    done(i+1);
                }else {
                    dispatch({ type: FETCH_PEOPLE, payload:  allPersons})
                }
            }catch(err){
                console.log('Error planet => ', err);
            }        
                       
          };
          done(0); */
                     
    } catch(err){
        console.log('Error => ', err);
    }
    
     

    
    // response is returned in the parameter       
    
}


/* export const addPerson = (person) => async dispatch => {
    //const res = await axios.get('/api/current_user');
    const res = await apiClient.post('/people', person)
    .then(response => {
        // response is returned in the parameter       
        dispatch({ type: ADD_PERSON, payload: response.data.results });   
    });
        
} */


