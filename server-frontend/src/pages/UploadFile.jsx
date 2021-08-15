/* eslint-disable jsx-a11y/label-has-associated-control */
import { Typography, Button, Box } from '@material-ui/core';
import { useRef, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { sendFile } from '../api';

const UploadFile = () => {
  const fileInput = useRef();
  const [file, setFile] = useState(null);

  const addFileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const resetFileHandler = () => {
    fileInput.current.value = null;
    setFile(null);
  };

  const sendFileHandler = async () => {
    await sendFile(file);
    setFile(null);
  };

  return (
    <Layout>
      <Typography className="page-title" variant="h2">
        Upload File
      </Typography>
      <form action="">
        <Box mb={3}>
          <Button
            className="mr-3"
            variant="contained"
            color="primary"
            component="label"
          >
            add file
            <input
              onChange={addFileHandler}
              style={{ display: 'none' }}
              name="file"
              type="file"
              ref={fileInput}
            />
          </Button>
          <Typography variant="p">{file?.name}</Typography>
        </Box>
        <Box>
          <Button
            onClick={sendFileHandler}
            disabled={!file}
            className="mr-3"
            mr={2}
            variant="contained"
            color="primary"
          >
            Upload file
          </Button>
          <Button
            onClick={resetFileHandler}
            variant="contained"
            color="secondary"
            disabled={!file}
          >
            Reset file
          </Button>
        </Box>
      </form>
    </Layout>
  );
};
export default UploadFile;
