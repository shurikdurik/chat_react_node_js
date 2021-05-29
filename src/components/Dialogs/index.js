import React from 'react';
import { DialogItem } from '../';
import { Input, Empty } from 'antd';
import orderBy from 'lodash/orderBy';

import './Dialogs.scss';

const { Search } = Input;

const Dialogs = ({ items, userId, onSearch, inputValue }) => {
  console.log(items);
  return (
    <div className="dialogs">
      <div className="dialogs__search">
        <Search
          placeholder="Search in contactlist"
          onChange={(e) => onSearch(e.target.value)}
          value={inputValue}
          style={{ width: 290 }}
        />
      </div>
      {items.length ? (
        orderBy(items, ['created_at'], ['desc']).map((item) => (
          <DialogItem
            key={item._id}
            user={item.user}
            message={item}
            isMe={item.user._id === userId}
          />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </div>
  );
};

export default Dialogs;
