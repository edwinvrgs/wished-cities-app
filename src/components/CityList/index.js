import React, { useEffect, useMemo } from 'react';
import PropTypes                     from 'prop-types';
import { useSelector }               from 'react-redux';

import { useActions, useFormInput } from '../../hooks';
import { bucketActions }            from '../../state/ducks/bucket';

import Loading from '../Loading';
import Error   from '../Error';

import { City } from './components';

const CityList = ({ onClick }) => {
  const {
    budget, cities, selectedCountry, selectedCities, loading, error,
  } = useSelector(({ bucket }) => bucket);
  const { selectCity, removeCity, fetchCities } = useActions(bucketActions);

  const search = useFormInput('');

  const { cities: filteredCities, remainingBudget } = useMemo(() => {
    const selectedCitiesWithInfo = cities.filter((city) => selectedCities.includes(city.id));
    const totalPrice = selectedCitiesWithInfo.reduce(
      (accum, selectedCity) => accum + selectedCity.price, 0,
    );
    const remainingBudget = budget - totalPrice;

    return ({
      cities: cities.filter(
        (city) => selectedCities.includes(city.id) || city.price < remainingBudget,
      ),
      remainingBudget,
    });
  }, [budget, cities, selectedCities]);

  const areAllCitiesSelected = useMemo(
    () => filteredCities.reduce((accum, city) => accum && selectedCities.includes(city.id), true),
    [filteredCities, selectedCities],
  );

  console.log({ areAllCitiesSelected });

  useEffect(() => {
    if (selectedCountry) {
      fetchCities(selectedCountry);
    }
  }, [fetchCities, selectedCountry]);

  if (loading || !selectedCountry || cities.length === 0) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div>
      <h4>
        Budget:
        {' '}
        {remainingBudget}
        /
        {budget}
      </h4>
      <div className="field">
        <div className="control">
          <input
            className="input is-large is-info"
            type="text"
            placeholder="Search a city" {...search}
          />
        </div>
      </div>
      <div className="columns is-multiline">
        {
          filteredCities.filter((city) => city.name.toLowerCase()
            .includes(search.value.toLowerCase()))
            .map((city) => (
              <City
                key={city.id}
                city={city}
                selectedCities={selectedCities}
                onClick={() => {
                  if (selectedCities.includes(city.id)) {
                    removeCity(city.id);
                  } else {
                    selectCity(city.id);
                  }
                }}
              />
            ))
        }
      </div>
      {
        areAllCitiesSelected && (
          <div className="has-text-centered">
            <button
              className="button is-large is-dark is-centered"
              onClick={() => {
                onClick();
              }}
            >
              Save bucket!
            </button>
          </div>
        )
      }
    </div>
  );
};

CityList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CityList;
