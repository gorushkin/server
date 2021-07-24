import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import Notification from '../Notification/Notification.jsx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Notification show={show} handleClose={handleClose} />
      <Header />
      <Container className="container">
        <>{children}</>
      </Container>
    </>
  );
};

export default Layout;
