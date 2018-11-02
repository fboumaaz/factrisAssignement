import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import ModalContainer from '../containers/ModalContainer';
class People extends Component {
  constructor(props) {
    super(props);
  }
    state = {
      modal: false
    };

    changeModalState(){
      this.setState({ modal: !this.state.modal });
    }
    render(){
        const { name, height, mass, birth_year, gender, eye_color, homeworld} = this.props;
        return (
              <tr id={homeworld}  onClick= { e => {
                  let url = e.currentTarget.getAttribute("id");
                  this.props.getPeoplePlanet(url);
                  this.setState({
                    modal: true
                  });
              }}>
                  <td>{name}</td>
                  <td>{height}</td>
                  <td>{mass}</td>
                  <td>{birth_year}</td>
                  <td>{gender}</td>
                  <td>{eye_color}</td>  
                  <ModalContainer changeModalState={this.changeModalState.bind(this)}  modalState={this.state.modal} />
                
            </tr>
           
          )
    }
}
People.propTypes = {
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
}
// export default People;
export default connect(null, actions)(People);
