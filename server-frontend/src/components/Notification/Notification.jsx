import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { actions } from '../../store';
import { useAction } from '../../hooks/useAction';

const Notification = () => {
  const { alert } = useSelector((state) => state);
  const closeAlert = useAction(actions.hideAlert);

  const toastClassnames = cn('toast', {
    show: !!alert.message,
  });

  return (
    <>
      <div
        className="position-fixed bottom-0 end-0 p-3"
        style={{ 'z-index': 11 }}
      >
        <div
          id="liveToast"
          className={toastClassnames}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Message</strong>
            {/* <small>11 mins ago</small> */}
            <button
              onClick={() => closeAlert()}
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body">{alert.message}</div>
        </div>
      </div>
    </>
  );
};

export default Notification;
