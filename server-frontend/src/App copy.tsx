import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const url = 'http://localhost:4000';

const App = () => {
  useEffect(() => {
    const getInfo = async () => {
      const data = await axios.get(`${url}`);
      console.log('data: ', data);
    };
    getInfo();
  }, []);

  return (
    <div>
      <Container className="container">
        <Typography component="h1" variant="h1">
          Server
        </Typography>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </Container>
    </div>
  );
};

export default App;
