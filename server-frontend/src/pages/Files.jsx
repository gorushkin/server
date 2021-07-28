import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import { getFilesList, url, getFile } from '../api';

const Files = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getFilesList().then(({ data }) => {
      setFiles(data);
    });
  }, []);

  const onClickHandler = async (name) => {
    const qwe = await getFile(name);
  };

  return (
    <Layout>
      <Typography variant="h2">Files</Typography>
      <Grid container>
        <Grid xs>
          <List>
            {files &&
              files.map((name, index) => (
                <ListItem key={index} button>
                  <a
                    rel="noreferrer"
                    href={`${url}/file/${name}`}
                    target="_blank"
                    download="asfasdfd"
                  >
                    {name}
                  </a>
                </ListItem>
              ))}
          </List>
        </Grid>
        {/* <Grid xs>
          <List>
            {files &&
              files.map((name, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => onClickHandler(name)}
                >
                  {name}
                </ListItem>
              ))}
          </List>
        </Grid> */}
        {/* <Grid xs>
          <List>
            {files &&
              files.map((name, index) => (
                <ListItem
                  key={index}
                  component={RouterLink}
                  button
                  to={`${name}`}
                  target="_blank"
                  download
                >
                  {name}
                </ListItem>
              ))}
          </List>
        </Grid> */}
      </Grid>
    </Layout>
  );
};

export default Files;
