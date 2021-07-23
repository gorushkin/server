import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { getServerStatus } from '../../api';

const Header = () => {
  const [serverStatus, setServerStatus] = useState('');

  useEffect(() => {
    const getInfo = async () => {
      const { data } = await getServerStatus();
      setServerStatus(data);
    };
    getInfo();
  }, []);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container direction="row" alignItems="center">
          <Typography className="header__title" variant="h6">
            Server
          </Typography>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Files
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            UploadFile
          </Button>
          <Typography className="header__status" variant="h6">
            {serverStatus}
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
