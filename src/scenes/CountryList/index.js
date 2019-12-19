import React, { useEffect } from 'react';
import { useSelector }      from 'react-redux';

import { bucketActions }  from '../../state/ducks/bucket';
import { useActions }     from '../../hooks';
import { Error, Loading } from '../../components';

import { Country } from './components';

const CountryList = () => {
  const { countries, loading, error } = useSelector(({ bucket }) => bucket);
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
      <div className="tile is-parent">
        {
          countries.map((country) => (
            <Country key={JSON.stringify(country)} country={country} onClick={selectCountry} />
          ))
        }
      </div>
    </div>
  );
};

CountryList.propTypes = {};

export default CountryList;
