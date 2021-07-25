import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import Notification from '../Notification/Notification';

const Layout = ({ children }) => (
  <>
    <Notification />
    <Header />
    <Container className="container">
      <>{children}</>
    </Container>
  </>
);

export default Layout;
