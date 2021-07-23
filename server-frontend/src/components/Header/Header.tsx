import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { getServerStatus } from '../../api';
import HeaderItem from './HeaderItem';

// TODO: Отстой этот Typography. Надо от него избавиться

const routes = [
  { href: '/', label: 'Server' },
  { href: '/files', label: 'Files' },
  { href: '/upload', label: 'Upload File' },
];

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
          {routes.map(({ label, href }, index) => (
            <HeaderItem key={index} label={label} href={href} />
          ))}
          <Typography className="header__status" variant="h6">
            {serverStatus}
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
