import React from 'react';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Dialogs, Message, Status, ChatInput } from 'components';
import parseISO from 'date-fns/parseISO';

import './Home.scss';

const { Search } = Input;

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined />
              <span>List of your dialogs</span>
            </div>
            <FormOutlined />
          </div>
          <div className="chat__sidebar-search">
            <Search placeholder="Search in contactlist" style={{ width: 290 }} />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs
              userId={3}
              items={[
                {
                  _id: 'c7d844d080f7d64adafe849ae58ac56b',
                  text: 'Hi bro. Looking forwart to see you',
                  isReaded: false,
                  created_at: parseISO('2014-02-11T11:30:30'),
                  user: {
                    _id: 'c7d844d080f7d64adafe849ae58ac56b',
                    fullName: 'Alex Iats',
                    avatar: null,
                    isOnline: true,
                  },
                },
                {
                  _id: 'd7d844d080f7d64adafe849ae58ac56b',
                  text: 'Hope to see you soon, my brother. It will be legendary',
                  isReaded: false,
                  created_at: parseISO('2021-05-03T11:30:30'),
                  user: {
                    _id: 'd7d844d080f7d64adafe849ae58ac56b',
                    fullName: 'Stas Boy',
                    avatar: 'https://avatarfiles.alphacoders.com/186/186939.jpg',
                    isOnline: true,
                  },
                },
              ]}
            />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <div className="chat__dialog-header-username">
                <b>Ibragim Rabinovich</b>
              </div>
              <div className="chat__dialog-header-status">
                <Status online />
              </div>
            </div>
            <EllipsisOutlined style={{ fontSize: '22px' }} />
          </div>
          <div className="chat__dialog-messages">
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
          <ChatInput />
        </div>
      </div>
    </section>
  );
};

export default Home;
