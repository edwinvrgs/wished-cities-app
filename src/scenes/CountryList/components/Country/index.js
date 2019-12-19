import React     from 'react';
import PropTypes from 'prop-types';

const Country = ({ country, onClick }) => (
  <div className="tile is-parent">
    <div
      className="tile is-child notification is-info"
      style={{
        cursor: 'pointer',
      }}
      onClick={() => onClick(country)}
    >
      <p>
        {country}
      </p>
    </div>
  </div>
);

Country.propTypes = {
  country: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Country;
