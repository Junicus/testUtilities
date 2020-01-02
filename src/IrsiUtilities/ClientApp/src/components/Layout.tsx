import * as React from "react";
import { Container } from "reactstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default (props: { children?: React.ReactNode }) => (
  <React.Fragment>
    <Header />
    <Container style={{ display: "flex" }} fluid={true}>
      <Sidebar />
      {props.children}
    </Container>
  </React.Fragment>
);
