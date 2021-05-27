import React, { useState } from 'react';
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

import './ChatInput.scss';

function ChatInput() {
  const [value, setValue] = useState('');

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button shape="circle" icon={<SmileOutlined style={{ fontSize: '22px' }} />} />
      </div>

      <Input onChange={(e) => setValue(e.target.value)} placeholder="Please enter your message" />
      <div className="chat-input__actions">
        <Button shape="circle" icon={<CameraOutlined style={{ fontSize: '22px' }} />} />
        {value ? (
          <Button
            shape="circle"
            icon={<SendOutlined style={{ fontSize: '22px', color: '#3674ff' }} />}
          />
        ) : (
          <Button shape="circle" icon={<AudioOutlined style={{ fontSize: '22px' }} />} />
        )}
      </div>
    </div>
  );
}

export default ChatInput;
