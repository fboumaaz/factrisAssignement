import React, { Component  } from "react";
import Planet from "./planet";
import PropTypes from 'prop-types';
import _ from 'underscore';
import { DropdownMenu  } from 'reactstrap';

class PlanetsList extends Component {
    renderPlanets(){
        const { planets } = this.props;
        if(planets) {            
            return _.map(planets, planet => {
                return <Planet key={planet.name} { ...planet } />
            });

        }
    }
    render(){
      
        return (
            <DropdownMenu>
                  { this.renderPlanets() }
            </DropdownMenu>
        )
    }
}
PlanetsList.propTypes = {
    planets: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}
export default PlanetsList;