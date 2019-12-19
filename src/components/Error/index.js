import React     from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <div>
    <p>Error!</p>
    <p>{error}</p>
  </div>
);

Error.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]).isRequired,
};

export default Error;
