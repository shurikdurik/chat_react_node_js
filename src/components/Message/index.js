import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Time, IconReaded } from '../';

import './Message.scss';

const Message = ({ avatar, text, user, date, isMe, isReaded, attachments, isTyping }) => {
  return (
    <div
      className={classnames('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
        'message--image': attachments && attachments.length === 1,
      })}>
      <div className="message__content">
        <IconReaded isReaded={isReaded} isMe={isMe} />
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          <div>
            {(isTyping || text) && (
              <div className="message__bubble">
                {text && <p className="message__text">{text}</p>}
                {isTyping && (
                  <div className="message__typing">
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>
            )}
            <div className="message__attachments">
              {attachments &&
                attachments.map((item) => (
                  <div className="message__attachments-item">
                    <img key={item.id} src={item.url} alt={item.filename} />
                  </div>
                ))}
            </div>
            {date && (
              <span className="message__date">
                <Time date={date} />
              </span>
            )}
          </div>
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
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
};

export default Message;
