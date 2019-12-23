import React     from 'react';
import PropTypes from 'prop-types';

const Country = ({ country: { name, id }, selectedCountry, onClick }) => (
  <div className="tile is-parent">
    <div
      className={`tile is-child notification ${selectedCountry === id ? 'is-dark' : 'is-light'}`}
      style={{
        cursor: 'pointer',
      }}
      onClick={onClick}
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
    id: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  selectedCountry: PropTypes.number,
};

Country.defaultProps = {
  selectedCountry: null,
};

export default Country;
