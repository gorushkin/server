import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { NotificationContext } from './NotificationContext';

const Notification = () => {
  const { title, setTitle } = useContext(NotificationContext);

  const handleClose = () => setTitle('')

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={!!title}
      autoHideDuration={6000}
      onClose={handleClose}
      message={title}
      action={
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};

export default Notification;
