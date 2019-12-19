import React     from 'react';
import PropTypes from 'prop-types';

const Country = ({ country, onClick }) => (
  <div
    className="tile notification is-info"
    style={{
      cursor: 'pointer',
    }}
    onClick={() => onClick(country)}
  >
    <p>
      {country}
    </p>
  </div>
);

Country.propTypes = {
  country: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Country;
