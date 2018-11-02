import React, { Component , Fragment  } from 'react';
import './App.css';
import PeopleList from './components/peopleList';
import PlanetsList from './components/planetsList';
import SpeciesList from './components/speciesList';
import GenderList from './components/genderList';
import Header from './components/header';
import * as actions from "./actions";
import { connect } from "react-redux";
import { Button, ButtonDropdown, DropdownToggle, Container, Row, Col  } from 'reactstrap';
import _ from 'underscore'
import Loading from "./loading";

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = { theme: null, planetsFilter: false, speciesFilter:false , gendersFilter:false }
  
  toggleSpeciesFilter = () => {
    this.setState({speciesFilter : !this.state.speciesFilter});
  }
  toggleGendersFilter = _ => this.setState({gendersFilter : !this.state.gendersFilter});
  togglePlanetsFilter= () => {
    this.setState({ planetsFilter: !this.state.planetsFilter});
  }
  
  componentDidMount(){
    console.log('Component did mount');
  }

  componentWillMount(){
    this.props.fetchPeople();
    this.props.fetchPlanets();
    this.props.fetchSpecies();
    this.props.fetchGenders();
}

  renderPeopleList(){
    if(this.props.people){
      return <PeopleList people={this.props.people}/>;
    }
  }
  renderPlanetsList(){
    if(this.props.planets){
      return <PlanetsList planets={this.props.planets}/>;
    }
  }

  renderSpeciesList(){
    
    if(this.props.species){
      console.log('SPECIES => ', this.props.species);
        return <SpeciesList species={this.props.species}/>;
    }     
  }

  renderGenderList(){
    if(this.props.genders){
      return <GenderList genders={this.props.genders}/>;
    } 
  }
  renderContainer (){
    const {planetsFilter,speciesFilter ,gendersFilter} = this.state;
    if(this.props.people){
      return(
        <Container className="px-0">
            <Row>
              <Col xs ={{order:1}} md = {{ size:4, order:1}}>
              <ButtonDropdown isOpen={planetsFilter} toggle={this.togglePlanetsFilter}>
                <Button id="caret"> Planets</Button>
                <DropdownToggle caret size="lg"/>
                  {this.renderPlanetsList()}
              </ButtonDropdown>
              </Col>
              <Col xs ={{order:1}} md = {{ size:4, order:1}}>
              <ButtonDropdown isOpen={speciesFilter} toggle={this.toggleSpeciesFilter}>
                <Button id="caret"> Species</Button>
                <DropdownToggle caret size="lg"/>
                  {this.renderSpeciesList()}
              </ButtonDropdown>
              </Col>
              <Col xs ={{order:1}} md = {{ size:4, order:1}}>
              <ButtonDropdown isOpen={gendersFilter} toggle={this.toggleGendersFilter}>
                <Button id="caret">Gender</Button>
                <DropdownToggle caret size="lg"/>
                  {this.renderGenderList()}
              </ButtonDropdown>
              </Col>
            </Row>
            <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">              
              <Col xs={{ order: 1 }} md={{ size: 12, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                { this.renderPeopleList()  }
              </Col>
            </Row>
          </Container>
      )
      
    }
    else{
      return(<Loading />)
    }
  }
  render() {    
    
    return (
     
      <div className="App">
      <Fragment>
        <Header className="App-header" />
        <main className="my-5 py-5">
        
{        this.renderContainer()
}        </main>
      </Fragment>
      </div>
    );
  }
}
function mapStateToProps ({ people, planets , species, genders})  {   
  return {
      planets : planets,
      people : people,    
      species : species,
      genders : genders 
  };  
}
export default connect(mapStateToProps, actions)(App);
