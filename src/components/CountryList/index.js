import React, { useEffect } from 'react';
import { useSelector }      from 'react-redux';

import { useActions }    from '../../hooks';
import { bucketActions } from '../../state/ducks/bucket';

const CountryList = () => {
  const { countries, loading, error } = useSelector(({ bucket }) => bucket);
  const { fetchCountries } = useActions(bucketActions);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  if (loading || countries.length === 0) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error!</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {
        countries.map((country) => (
          <p key={country}>{country}</p>
        ))
      }
    </div>
  );
};

CountryList.propTypes = {};

export default CountryList;
