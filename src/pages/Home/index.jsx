import React from 'react';
import { Dialogs, Message } from 'components';
import parseISO from 'date-fns/parseISO';

import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <Dialogs
        items={[
          {
            userId: 3,
            _id: Math.random(),
            text: 'Hi bro. Looking forwart to see you',
            isReaded: false,
            created_at: parseISO('2014-02-11T11:30:30'),
            user: {
              _id: 1,
              fullName: 'Alex Iats',
              avatar: null,
              isOnline: true,
            },
          },
          {
            userId: 2,
            _id: Math.random(),
            text: 'Hope to see you soon, my brother',
            isReaded: false,
            created_at: parseISO('2021-05-03T11:30:30'),
            user: {
              _id: 2,
              fullName: 'Stas Boy',
              avatar: 'https://avatarfiles.alphacoders.com/186/186939.jpg',
              isOnline: true,
            },
          },
        ]}
      />
      <Message
        avatar="https://avatarfiles.alphacoders.com/186/186939.jpg"
        date={new Date(2019, 6, 2)}
        isMe={false}
        isReaded={true}
        audio="https://assets.mixkit.co/sfx/preview/mixkit-musical-alert-notification-2309.mp3"
      />
      {/* <Message
        avatar="https://sun1-47.userapi.com/s/v1/if2/TGH_uTOX48K7-yDkmdHSUVa4TselwTCb75CbOT9Ebm-rttsK7FiB9nqqmWuHFtdqD2rDiVUTHuKwAlOXJSk4ALdI.jpg?size=400x0&quality=96&crop=87,0,340,340&ava=1"
        text="Hi! How are you? Here is some pics I told you before."
        date={new Date(2019, 6, 2)}
        attachments={[
          {
            filename: 'file1.jpg',
            url: 'https://source.unsplash.com/100x100/?random1&nature,water',
          },
          {
            filename: 'file1.jpg',
            url: 'https://source.unsplash.com/100x100/?random2&nature,water',
          },
          {
            filename: 'file1.jpg',
            url: 'https://source.unsplash.com/100x100/?random3&nature,water',
          },
        ]}
      />
      <Message
        avatar="https://avatarfiles.alphacoders.com/186/186939.jpg"
        text="Fine! And you?"
        date={new Date(2019, 6, 2)}
        isMe={true}
        isReaded={true}
      />
      <Message
        avatar="https://sun1-47.userapi.com/s/v1/if2/TGH_uTOX48K7-yDkmdHSUVa4TselwTCb75CbOT9Ebm-rttsK7FiB9nqqmWuHFtdqD2rDiVUTHuKwAlOXJSk4ALdI.jpg?size=400x0&quality=96&crop=87,0,340,340&ava=1"
        isTyping
      />
      <Message
        avatar="https://sun1-47.userapi.com/s/v1/if2/TGH_uTOX48K7-yDkmdHSUVa4TselwTCb75CbOT9Ebm-rttsK7FiB9nqqmWuHFtdqD2rDiVUTHuKwAlOXJSk4ALdI.jpg?size=400x0&quality=96&crop=87,0,340,340&ava=1"
        date={new Date(2019, 6, 2)}
        attachments={[
          {
            filename: 'file1.jpg',
            url: 'https://source.unsplash.com/100x100/?random1&nature,water',
          },
        ]}
      /> */}
    </section>
  );
};

export default Home;
