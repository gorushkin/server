import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import Notification from '../Notification/Notification';
import { NotificationContext } from '../Notification/NotificationContext';

const Layout = ({ children }) => {
  const [title, setTitle] = useState('');

  return (
    <NotificationContext.Provider value={{ title, setTitle }}>
      <Notification />
      <Header />
      <Container className="container">
        <>{children}</>
      </Container>
    </NotificationContext.Provider>
  );
};

export default Layout;
