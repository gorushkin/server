import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Layout from '../components/Layout/Layout';
import { getFilesList, url } from '../api';

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
      <List>
        {files &&
          files.map((name, index) => (
            <ListItem
              key={index}
              component={RouterLink}
              button
              to={`${url}/${name}`}
              target="_blank"
              download
            >
              {name}
            </ListItem>
          ))}
      </List>
    </Layout>
  );
};

export default Files;
