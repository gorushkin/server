import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { actions } from '../../store';
import { useAction } from '../../hooks/useAction';

const Notification = () => {
  const { alert } = useSelector((state) => state);
  const closeAlert = useAction(actions.hideAlert);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={!!alert.message}
      autoHideDuration={6000}
      onClose={closeAlert}
      message={alert.message}
      action={
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => closeAlert()}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};

export default Notification;
