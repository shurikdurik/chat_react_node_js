import React from 'react';
import readed from 'assets/img/readed.svg';
import noreaded from 'assets/img/noreaded.svg';
import PropTypes from 'prop-types';

const IconReaded = ({ isMe, isReaded }) =>
  isMe &&
  (isReaded ? (
    <img className="message__icon-readed" src={readed} alt="readed icon" />
  ) : (
    <img
      className="message__icon-readed message__icon-readed--no"
      src={noreaded}
      alt="noreaded icon"
    />
  ));

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};
export default IconReaded;
