import React, { useEffect } from 'react';
import { useSelector }      from 'react-redux';

import { bucketActions } from '../../state/ducks/bucket';
import { useActions }    from '../../hooks';

import { Error, Loading } from '../../components';

const CountryList = () => {
  const { countries, loading, error } = useSelector(({ bucket }) => bucket);
  const { fetchCountries } = useActions(bucketActions);

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
