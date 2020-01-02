import * as React from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Sidebar extends React.PureComponent<
  {},
  { isOpen: boolean }
> {
  public state = {
    isOpen: false
  };

  public render() {
    return (
      <div style={{ width: 240 }}>
        <nav>
          <Nav vertical>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/stores">
                Stores
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/water">
                Water
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/electricity">
                Electricity
              </NavLink>
            </NavItem>
          </Nav>
        </nav>
      </div>
    );
  }

  private toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}
