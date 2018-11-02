import React, { Component  } from "react";

import Species from "./species";
import PropTypes from 'prop-types';
import _ from 'underscore';
import { DropdownMenu } from 'reactstrap';

class SpeciesList extends Component {

    renderSpecies(){
        const { species } = this.props;
        if(species) {            
            return _.map(species, s => {
                return <Species key={s.name} { ...s } />
            });

        }
    }

    render(){
      
        return (
            <DropdownMenu>
                  { this.renderSpecies() }
            </DropdownMenu>
        )
    }
} 


SpeciesList.propTypes = {
    species: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}


export default SpeciesList;