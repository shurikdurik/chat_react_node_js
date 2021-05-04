import React, { Fragment } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Time = ({ date }) => <Fragment>{formatDistanceToNow(date, { addSuffix: true })}</Fragment>;

export default Time;
