import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classnames from 'classnames';
import readed from 'assets/img/readed.svg';
import noreaded from 'assets/img/noreaded.svg';

import './Message.scss';

const Message = ({ avatar, text, user, date, isMe, isReaded }) => {
  return (
    <div className={classnames('message', { 'message--isme': isMe })}>
      <div className="message__content">
        {isMe && isReaded ? (
          <img className="message__icon-readed" src={readed} alt="readed icon" />
        ) : (
          <img
            className="message__icon-readed message__icon-readed--no"
            src={noreaded}
            alt="noreaded icon"
          />
        )}
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
          <span className="message__date">{formatDistanceToNow(date, { addSuffix: true })}</span>
        </div>
      </div>
    </div>
  );
};
Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.object,
  date: PropTypes.string,
};

export default Message;
