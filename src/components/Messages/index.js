import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from 'components';

const Messages = ({ items }) => {
  return items.length ? (
    <div>
      <Message
        avatar="https://avatarfiles.alphacoders.com/186/186939.jpg"
        date={new Date(2019, 6, 2)}
        isMe={false}
        isReaded={true}
        audio="https://assets.mixkit.co/sfx/preview/mixkit-musical-alert-notification-2309.mp3"
      />
      <Message
        avatar="https://avatarfiles.alphacoders.com/186/186939.jpg"
        date={new Date(2019, 6, 2)}
        isMe={false}
        isReaded={true}
        text="Listen it"
      />
      <Message
        avatar="https://avatarfiles.alphacoders.com/186/186939.jpg"
        date={new Date(2019, 6, 2)}
        isMe={true}
        isReaded={true}
        text="Please stop sending me audiomessages. It annoing me"
      />
    </div>
  ) : (
    <Empty description="No messages founded" />
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};
export default Messages;
