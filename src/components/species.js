import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from 'reactstrap';
import * as actions from '../actions';
import { connect } from 'react-redux';
class Species extends Component {    
   
    render(){
        const { name, url} = this.props;
        return (
            <DropdownItem id={url} onClick={ e => {
                let url = e.currentTarget.getAttribute("id");
                this.props.filterPeopleBySpecies(url);
                
            }}>{name}</DropdownItem>
            )
    }
}
 

Species.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
export default connect(null, actions)(Species);