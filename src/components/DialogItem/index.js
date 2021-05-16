import React from 'react';
import classNames from 'classnames';
import { IconReaded, Avatar } from '../';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import './DialogItem.scss';

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'HH:mm');
  }
  return format(created_at, 'dd.MM.yyyy');
};

const DialogItem = ({ user, message, unreaded, isMe }) => {
  return (
    <div className="dialogs">
      <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
        <div className="dialogs__item-avatar">
          <Avatar user={user} />
        </div>
        <div className="dialogs__item-info">
          <div className="dialogs__item-info-top">
            <b>{user.fullName}</b>
            <span>{getMessageTime(message.created_at)}</span>
          </div>
          <div className="dialogs__item-info-buttom">
            <p>{message.text}</p>
            {isMe && <IconReaded isMe={true} isReaded={true} />}
            {unreaded > 0 && (
              <div className="dialogs__item-info-buttom-count">
                {unreaded > 9 ? '+9' : unreaded}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
