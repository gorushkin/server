import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Box>
    <Header />
    <Container className="container">
      <>{children}</>
    </Container>
  </Box>
);

export default Layout;
