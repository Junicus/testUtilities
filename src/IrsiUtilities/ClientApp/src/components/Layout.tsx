import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Container: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

export default (props: { children?: React.ReactNode }) => (
  <>
    <Header />
    <Container>
      <Sidebar />
      {props.children}
    </Container>
  </>
);
