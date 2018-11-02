import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import { DropdownItem} from 'reactstrap';
import * as actions from '../actions';
import { connect } from 'react-redux';
class Planet extends Component {    
   
    render(){
        const { name, url} = this.props;
        return (
            <DropdownItem id={url} onClick={ e => {
                let url = e.currentTarget.getAttribute("id");
                this.props.filterPeopleByPlanet(url);
                
            }}>{name}</DropdownItem>
            )
    }
}
 

Planet.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}



export default connect(null, actions)(Planet);
