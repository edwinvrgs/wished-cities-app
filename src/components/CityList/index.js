import React, { useEffect } from 'react';
import { useSelector }      from 'react-redux';
import { useActions }       from '../../hooks';
import { bucketActions }    from '../../state/ducks/bucket';
import Loading              from '../Loading';
import Error                from '../Error';
import PropTypes            from 'prop-types';

const CityList = ({ onClick }) => {
  const { selectedCountry, loading, error } = useSelector(({ bucket }) => bucket);
  const { selectCity, fetchCities } = useActions(bucketActions);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  if (loading || !selectedCountry) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="tile is-ancestor">
      {
        countries.map((country) => (
          <City
            key={country.id}
            city={country}
            selectedCountry={selectedCountry}
            onClick={(cityName) => {
              onClick();
              selectCity(cityName);
            }}
          />
        ))
      }
    </div>
  );
};

CityList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CityList;
