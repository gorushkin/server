import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
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
          <Link
            color="inherit"
            component={RouterLink}
            className="header__link"
            to="/"
          >
            <Typography color="initial">Server</Typography>
          </Link>
          <Link
            color="inherit"
            component={RouterLink}
            className="header__link"
            to="/files"
          >
            <Typography color="initial">Files</Typography>
          </Link>
          <Link
            color="inherit"
            component={RouterLink}
            className="header__link"
            to="/upload"
          >
            <Typography color="inherit">Upload File</Typography>
          </Link>
          <Typography className="header__status" variant="h6">
            {serverStatus}
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
