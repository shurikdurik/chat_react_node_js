import React from 'react';
// import classNames from 'classnames';
import { DialogItem } from '../';
import orderBy from 'lodash/orderBy';

import './Dialogs.scss';

const Dialogs = ({ items }) => {
  return (
    <div className="dialogs">
      {orderBy(items, ['created_at'], ['desc']).map((item) => (
        <DialogItem
          key={item._id}
          user={item.user}
          message={item}
          isMe={item.user._id === item.userId}
        />
      ))}
    </div>
  );
};

export default Dialogs;
