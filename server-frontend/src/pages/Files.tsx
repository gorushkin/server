import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout/Layout';
import { getFilesList } from '../api';

type File = string;

// interface

const Files = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    getFilesList().then(({ data }: File[]) => {
      setFiles(data.files);
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
