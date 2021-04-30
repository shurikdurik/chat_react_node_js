import React from 'react';
import classNames from 'classnames';
import { Time, IconReaded } from '../';

import './DialogItem.scss';

const getAvatar = (avatar) => {
  if (avatar) {
    return <img src={avatar} alt="avatar" />;
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, message, unreaded }) => {
  return (
    <div className="dialogs">
      <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
        <div className="dialogs__item-avatar">
          {getAvatar('https://avatarfiles.alphacoders.com/186/186939.jpg')}
        </div>
        <div className="dialogs__item-info">
          <div className="dialogs__item-info-top">
            <b>{user.fullName}</b>
            <span>
              13:30
              {/* <Time date={new Date()} /> */}
            </span>
          </div>
          <div className="dialogs__item-info-buttom">
            <p>
              If you gonna be reach you have to be a bitch. I said bitch... Reach...If you gonna be
              reach you have to be a bitch. I said bitch... Reach...
            </p>
            <IconReaded isMe={true} isReaded={true} />
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
