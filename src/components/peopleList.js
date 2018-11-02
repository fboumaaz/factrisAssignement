import React, { Component  } from "react";
import People from "./people";
import PropTypes from 'prop-types';
import _ from 'underscore';
import {Table, Button } from 'reactstrap';
import * as actions from '../actions';
import { connect } from 'react-redux';

class PeopleList extends Component {
    constructor(props) {
        super(props);
      }
    renderAllPeople(){
        const { people } = this.props;  
        if(people && people.allPeople) {            
            return _.map(people.allPeople.results, person => {
                return <People  key={person.name} { ...person } />
            });
        } 
    }

    renderPeopleByPlanet(){
        const { people } = this.props;
         return _.map(people.peopleByPlanet, person => {
            return <People  key={person.name} { ...person } />
        });
    }

    renderPeopleBySpecies(){
        const {people} = this.props;
        return _.map(people.peopleBySpecies, person =>{
            return <People  key={person.name} { ...person } />
        })
    }
    renderPeopleByGender (){
        const { people } = this.props;
        return _.map(people.peopleByGender, person => {
           return <People  key={person.name} { ...person } />
       });
    }

    renderPeople(){
        const { filter } = this.props.people;
        if(filter && filter.planet) {
            return this.renderPeopleByPlanet();
        } 

        if(filter && filter.species) {
            return this.renderPeopleBySpecies();
        } 
        if(filter && filter.gender) {
            return this.renderPeopleByGender();
        } 
        return this.renderAllPeople();
    }

    render(){
      
        return (
            <div>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>birth year</th>
                    <th>Gender</th>
                    <th>Eye color</th>
                </tr>
                </thead>
                <tbody>
                    {/* put the modal call here */}
                    { this.renderPeople() }
                </tbody>
            </Table>
             
            <Button style={{float: 'left'}} onClick={ _ => {
                var urlPrevious = this.props.people.allPeople.previous;
                if(urlPrevious) this.props.getPreviousPeople(urlPrevious);
            }}>previous</Button>
            <Button style={{float: 'right'}} onClick={ _ => {
                var urlNext = this.props.people.allPeople.next;
                if(urlNext) this.props.getNextPeople(urlNext);
            }}>next</Button>
            </div>
     )
    }
} 


PeopleList.propTypes = {
    people: PropTypes.objectOf(
        PropTypes.shape({
            allPeople : PropTypes.objectOf(
                PropTypes.shape({
                    count: PropTypes.string.isRequired,
                    next: PropTypes.string.isRequired,
                    previous: PropTypes.string.isRequired,
                    results : PropTypes.arrayOf(
                        PropTypes.shape({
                            name: PropTypes.string.isRequired,
                            height: PropTypes.string.isRequired,
                            mass: PropTypes.string.isRequired,
                            birth_year: PropTypes.string.isRequired,
                            gender: PropTypes.string.isRequired,
                            eye_color: PropTypes.string.isRequired,
                        }).isRequired
                    ).isRequired
                }).isRequired
            ).isRequired,
            filter: PropTypes.objectOf(
                PropTypes.shape({
                    planet: PropTypes.bool.isRequired,
                    species: PropTypes.bool.isRequired,
                    gender: PropTypes.bool.isRequired
                }).isRequired
            ).isRequired
        }).isRequired
  ).isRequired
}


// export default People List;
export default connect(null, actions)(PeopleList);
