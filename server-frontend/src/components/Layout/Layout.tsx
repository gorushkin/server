import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';



const Layout = ({ children }) => (
  <div>
    <Container className="container">
      <Typography component="h1" variant="h1">
        Server
      </Typography>
    </Container>
  </div>
);

export default Layout;
