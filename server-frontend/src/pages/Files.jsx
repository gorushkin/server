import { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout/Layout';
import { getFilesList } from '../api';

const Files = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getFilesList().then(({ data }) => {
      setFiles(data);
    });
  }, []);

  return (
    <Layout>
      <Typography variant="h2">Files</Typography>
      <ul>{files && files.map((item, index) => <p key={index}>{item}</p>)}</ul>
    </Layout>
  );
};

export default Files;
