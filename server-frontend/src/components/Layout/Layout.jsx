import React from 'react';
import Header from '../Header/Header';
import Notification from '../Notification/Notification';

const Layout = ({ children }) => (
  <>
    <Notification />
    <Header />
    <div className="container">
      <>{children}</>
    </div>
  </>
);

export default Layout;
