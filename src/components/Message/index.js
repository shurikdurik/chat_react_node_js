import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Time, IconReaded, MessageAudio } from '../';

import './Message.scss';

const Message = ({ avatar, text, user, date, audio, isMe, isReaded, attachments, isTyping }) => {
  return (
    <div
      className={classnames('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
        'message--is-audio': audio,
        'message--image': attachments && attachments.length === 1,
      })}>
      <div className="message__content">
        <IconReaded isReaded={isReaded} isMe={isMe} />
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          <div>
            {(audio || isTyping || text) && (
              <div className="message__bubble">
                {text && <p className="message__text">{text}</p>}
                {isTyping && (
                  <div className="message__typing">
                    <span />
                    <span />
                    <span />
                  </div>
                )}
                {audio && <MessageAudio audio={audio} />}
              </div>
            )}
            {attachments && (
              <div className="message__attachments">
                {attachments.map((item) => (
                  <div className="message__attachments-item">
                    <img key={item.id} src={item.url} alt={item.filename} />
                  </div>
                ))}
              </div>
            )}
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
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
};

export default Message;
