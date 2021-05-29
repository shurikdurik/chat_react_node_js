import React, { useState } from 'react';
import { Dialogs as BaseDialogs } from 'components';

const Dialogs = ({ items, userId }) => {
  const [inputValue, setValue] = useState('');
  const [filtred, setFiltred] = useState(Array.from(items));

  const onChangeInput = (value) => {
    setFiltred(
      items.filter(
        (dialog) => dialog.user.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0,
      ),
    );
    setValue(value);
    console.log(inputValue);
  };

  return (
    <BaseDialogs userId={userId} items={filtred} onSearch={onChangeInput} inputValue={inputValue} />
  );
};

export default Dialogs;
