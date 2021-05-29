import React from 'react';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Message, Status, ChatInput } from 'components';
import { Dialogs } from 'containers';
import parseISO from 'date-fns/parseISO';

import { Messages } from 'components';
import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined style={{ fontSize: '18px' }} />
              <span>List of your dialogs</span>
            </div>
            <Button shape="circle" icon={<FormOutlined style={{ fontSize: '18px' }} />} />
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
                  _id: 'sg3f44d080f7d64adafe849ae58ac56b',
                  text: 'Hope to see you soon, my brother. It will be legendary',
                  isReaded: false,
                  created_at: parseISO('2021-05-03T11:30:30'),
                  user: {
                    _id: 'sg3f44d080f7d64adafe849ae58ac56b',
                    fullName: 'Sasha Gal',
                    avatar: null,
                    isOnline: true,
                  },
                },
                {
                  _id: 'rt6744d080f7d64adafe849ae58ac56b',
                  text: 'Hope to see you soon, my brother. It will be legendary',
                  isReaded: false,
                  created_at: parseISO('2021-05-03T11:30:30'),
                  user: {
                    _id: 'rt6744d080f7d64adafe849ae58ac56b',
                    fullName: 'Andre Sokol',
                    avatar: null,
                    isOnline: true,
                  },
                },
                {
                  _id: 'u4r744d080f7d64adafe849ae58ac56b',
                  text: 'Hope to see you soon, my brother. It will be legendary',
                  isReaded: false,
                  created_at: parseISO('2021-05-03T11:30:30'),
                  user: {
                    _id: 'u4r744d080f7d64adafe849ae58ac56b',
                    fullName: 'Slava Bog',
                    avatar: 'https://avatarfiles.alphacoders.com/186/186939.jpg',
                    isOnline: true,
                  },
                },
                {
                  _id: '5r6t44d080f7d64adafe849ae58ac56b',
                  text: 'Hope to see you soon, my brother. It will be legendary',
                  isReaded: false,
                  created_at: parseISO('2021-05-03T11:30:30'),
                  user: {
                    _id: '5r6t44d080f7d64adafe849ae58ac56b',
                    fullName: 'Roma Razum',
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
                    avatar: null,
                    isOnline: true,
                  },
                },
                {
                  _id: 'cv5644d080f7d64adafe849ae58ac56b',
                  text: 'Hope to see you soon, my brother. It will be legendary',
                  isReaded: false,
                  created_at: parseISO('2021-05-03T11:30:30'),
                  user: {
                    _id: 'cv5644d080f7d64adafe849ae58ac56b',
                    fullName: 'Dima Kom',
                    avatar: null,
                    isOnline: true,
                  },
                },
                {
                  _id: 'i3e444d080f7d64adafe849ae58ac56b',
                  text: 'Hope to see you soon, my brother. It will be legendary',
                  isReaded: false,
                  created_at: parseISO('2021-05-03T11:30:30'),
                  user: {
                    _id: 'i3e444d080f7d64adafe849ae58ac56b',
                    fullName: 'Igor Alex',
                    avatar: null,
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
            <Button shape="circle" icon={<EllipsisOutlined style={{ fontSize: '22px' }} />} />
          </div>
          <div className="chat__dialog-messages">
            <Messages items />
          </div>
          <ChatInput />
        </div>
      </div>
    </section>
  );
};

export default Home;
