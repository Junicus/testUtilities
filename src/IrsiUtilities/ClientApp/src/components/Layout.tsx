import * as React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default (props: { children?: React.ReactNode }) => (
  <>
    <Header />
    <Container style={{ display: "flex" }} fluid={true}>
      <Sidebar />
      {props.children}
    </Container>
  </>
);
