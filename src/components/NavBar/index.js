import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand>HangMan Game</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              Created by {(this.props.owner) ? this.props.owner : "Guest"}
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;