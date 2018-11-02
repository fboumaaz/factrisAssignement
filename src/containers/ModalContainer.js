import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { connect } from 'react-redux';
class ModalContainer extends Component {

    modalBodyRender(){
        const planet = this.props.planetContent;
        const { modalState, changeModalState } = this.props;
        if(planet){
            return(
                
                [
                <ModalHeader key={"header"} >{planet.name}</ModalHeader>,
                <ModalBody key="body">
                <ul>
                    <li>
                            Climate : {planet.climate}
                    </li>
                    <li>
                            Gravity : {planet.gravity}
                    </li>
                    <li>
                            Population : {planet.population}
                    </li>
                    <li>
                            Diameter : {planet.diameter}
                    </li>
                    <li>
                            Orbital Period : {planet.orbital_period}
                    </li>
                    <li>
                            Rotation Period : {planet.rotation_period}
                    </li>
                    <li>
                            Surface Water : {planet.surface_water}
                    </li>
                    <li>
                            Terrain : {planet.terrain}
                    </li>
                </ul>
                </ModalBody>,
                <ModalFooter key={"footer"}>
                <Button color="primary" onClick={()=>{
                    changeModalState();
                }}>Cancel</Button>{' '}
                </ModalFooter>]
            
            )
        }
    }
    render(){
        const { modalState } = this.props;
        return (
            <Modal isOpen={modalState}>
                {this.modalBodyRender()}
            </Modal>
        )       
        
    }
}
function mapStateToProps({ people }){
    return {
        planetContent: people.peopleplanet
    }
}

export default connect(mapStateToProps)(ModalContainer);