import React from 'react';
import { Message } from 'components';

import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <Message
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
    </section>
  );
};

export default Home;
