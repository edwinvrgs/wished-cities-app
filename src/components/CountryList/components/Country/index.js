import React     from 'react';
import PropTypes from 'prop-types';

const Country = ({ country: { name }, selectedCountry, onClick }) => (
  <div className="tile is-parent">
    <div
      className={`tile is-child notification ${selectedCountry === name ? 'is-dark' : 'is-light'}`}
      style={{
        cursor: 'pointer',
      }}
      onClick={() => onClick(name)}
    >
      <p>
        {name}
      </p>
    </div>
  </div>
);

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  selectedCountry: PropTypes.string.isRequired,
};

export default Country;
