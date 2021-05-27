import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Status.scss';

function Status({ online }) {
  return (
    <span className={classnames('status', { 'status--online': online })}>
      {online ? 'online' : 'offline'}
    </span>
  );
}

Status.propTypes = {
  online: PropTypes.bool,
};
export default Status;
