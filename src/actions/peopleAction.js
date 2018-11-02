import axios from 'axios';
import { FETCH_PEOPLE } from './types';
import { FETCH_PLANETS } from './types';
import { FETCH_SPECIES } from './types';
//  import apiClient from '../mock-client/MockAxios';
import _ from 'underscore';

export const fetchPeople = () => async dispatch => {
    //const res = await axios.get('/api/current_user');
    try{        

        const res = await axios.get('https://swapi.co/api/people');    
        const people = res.data.results;
        const allPersons = [];
        const done = async function(i){            
            const person = people[i];
            try{
                const planet = person ? await axios.get(person.homeworld) : '';                            
                if(person) {
                    person.homeworld = planet ;
                    allPersons.push(person);
                }
                if(i < people.length){
                    done(i+1);
                }else {
                    dispatch({ type: FETCH_PEOPLE, payload: allPersons })
                }
            }catch(err){
                console.log('Error planet => ', err);
            }        
                       
          };
          done(0);
                     
    } catch(err){
        console.log('Error => ', err);
    }
    
     

    
    // response is returned in the parameter       
    
}