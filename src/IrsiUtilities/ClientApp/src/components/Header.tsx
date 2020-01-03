import * as React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { LoginMenu } from "./LoginMenu";

export default class Header extends React.PureComponent<
  {},
  { isOpen: boolean }
> {
  public state = {
    isOpen: false
  };

  public render() {
    return (
        <Menu fixed='top'>
            
        </Menu>
    //   <header>
    //     <Navbar
    //       className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3"
    //       light
    //     >
    //       <Container fluid={true}>
    //         <NavbarBrand tag={Link} to="/">
    //           IrsiUtilities
    //         </NavbarBrand>
    //         <NavbarToggler onClick={this.toggle} className="mr-2" />
    //         <Collapse
    //           className="d-sm-inline-flex flex-sm-row-reverse"
    //           isOpen={this.state.isOpen}
    //           navbar
    //         >
    //           <ul className="navbar-nav flex-grow">
    //             <LoginMenu />
    //           </ul>
    //         </Collapse>
    //       </Container>
    //     </Navbar>
    //   </header>
    );
  }

  private toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}
