import React from 'react';
// import logo from '../logo.svg';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const logo = 'https://www.factris.com/assets/images/icons/factris-logo.svg'

const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
        <Col className="d-flex justify-content-xs-start justify-content-lg-left">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 156 }}>
              <img src={logo} alt="logo" className="position-relative img-fluid" />
            </NavbarBrand>
          </Col>           
        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;
