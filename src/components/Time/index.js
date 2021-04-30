import React, { Fragment } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

const Time = ({ date }) => <Fragment>{formatDistanceToNow(date, { addSuffix: true })}</Fragment>;

Time.propTypes = {
  date: PropTypes.string,
};

export default Time;
