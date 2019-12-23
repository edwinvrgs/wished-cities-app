import React     from 'react';
import PropTypes from 'prop-types';

const City = ({ city: { name, price, id }, selectedCities, onClick }) => (
  <div className="column is-narrow">
    <div
      className={`notification ${selectedCities.includes(id)
        ? 'is-dark'
        : 'is-light'}`}
      style={{
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <p>{name}</p>
      <strong>{price}</strong>
    </div>
  </div>
);

City.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  selectedCities: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default City;
