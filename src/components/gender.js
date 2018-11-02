import React, { Component  } from 'react';
import {  DropdownItem } from 'reactstrap';
import * as actions from '../actions';
import { connect } from 'react-redux';
class Gender extends Component {    
  
    render(){
        const  gender = this.props.gender;
        if(gender){
            return (
                <DropdownItem id={gender} onClick={ e => {
                    let itemId = e.currentTarget.getAttribute("id");
                    this.props.filterPeopleByGender(itemId);
                    
                }}>{gender}</DropdownItem>
            )
        }
        
    }
}
export default connect(null, actions)(Gender);
