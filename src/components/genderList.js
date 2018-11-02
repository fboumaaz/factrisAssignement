//GenderList

import React, { Component  } from "react";
import Gender from "./gender";
import _ from 'underscore';
import {  DropdownMenu  } from 'reactstrap';

class GenderList extends Component {

    componentWillMount(){
        console.log('gender will mount')
    }
    componentDidMount(){
        console.log('Render Gender list')
    }
    renderGenders(){
        const genders  = this.props.genders;
        if(genders) {  
            return _.map(genders, gender => {
                return <Gender key={gender} gender ={gender}  />
            });
        }
    }
    render(){
      
        return (
            <DropdownMenu>
                  {this.renderGenders()}
            </DropdownMenu>
        )
    }
} 

export default GenderList;