import React, { useEffect, useState } from 'react';
// import { getServerStatus } from '../../api';
import { useFetch } from '../../api';
import HeaderItem from './HeaderItem';

const routes = [
  { href: '/', label: 'Server' },
  { href: '/files', label: 'Files' },
  { href: '/upload', label: 'Upload File' },
];

const Header = () => {
  const [serverStatus, setServerStatus] = useState('Server is down');
  const { status, data } = useFetch('/status');

  // useEffect(() => {
  // const getInfo = async () => {
  //   const { data } = await getServerStatus();
  //   setServerStatus(data);
  // };
  // getInfo();
  // }, []);

  useEffect(() => {
    setServerStatus(data);
  }, [status]);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {routes.map(({ label, href }, index) => (
                <HeaderItem key={index} label={label} href={href} />
              ))}
            </ul>
            <p className="header__status-text">{serverStatus}</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
