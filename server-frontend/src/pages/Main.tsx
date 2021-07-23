import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';

const url = 'http://localhost:4000';

const Main = () => {
  useEffect(() => {
    const getInfo = async () => {
      const data = await axios.get(`${url}`);
      console.log('data: ', data);
    };
    getInfo();
  }, []);

  return (
    <Layout>
      <div>asfassdfadfsdfdf</div>
    </Layout>
  );
};

export default Main;
