import React, { useEffect } from 'react';
import PropTypes            from 'prop-types';
import { useSelector }      from 'react-redux';

import { bucketActions } from '../../state/ducks/bucket';
import { useActions }    from '../../hooks';

import Loading from '../Loading';
import Error   from '../Error';

import { Country } from './components';

const CountryList = ({ onClick }) => {
  const { countries, selectedCountry, loading, error } = useSelector(({ bucket }) => bucket);
  const { fetchCountries, selectCountry } = useActions(bucketActions);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  if (loading || countries.length === 0) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="tile is-ancestor">
      {
        countries.map((country) => (
          <Country
            key={country.id}
            country={country}
            selectedCountry={selectedCountry}
            onClick={(countryName) => {
              onClick();
              selectCountry(countryName);
            }}
          />
        ))
      }
    </div>
  );
};

CountryList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CountryList;
