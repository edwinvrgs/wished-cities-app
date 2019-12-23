import React, { useEffect, useMemo } from 'react';
import { useSelector }               from 'react-redux';

import { useActions, useFormInput } from '../../hooks';
import { bucketActions }            from '../../state/ducks/bucket';

import Loading from '../Loading';
import Error   from '../Error';

import { City } from './components';

const CityList = () => {
  const {
    budget, cities, selectedCountry, selectedCities, loading, error,
  } = useSelector(({ bucket }) => bucket);
  const { selectCity, removeCity, fetchCities, saveBucket } = useActions(bucketActions);

  const search = useFormInput('');
  const name = useFormInput('Anna Doe');

  const { cities: filteredCities, totalPrice } = useMemo(() => {
    const selectedCitiesWithInfo = cities.filter((city) => selectedCities.includes(city.id));
    const totalPrice = selectedCitiesWithInfo.reduce(
      (accum, selectedCity) => accum + selectedCity.price, 0,
    );
    const remainingBudget = budget - totalPrice;

    return ({
      cities: cities.filter(
        (city) => selectedCities.includes(city.id) || city.price <= remainingBudget,
      ),
      totalPrice,
    });
  }, [budget, cities, selectedCities]);

  const areAllCitiesSelected = useMemo(
    () => filteredCities.reduce((accum, city) => accum && selectedCities.includes(city.id), true),
    [filteredCities, selectedCities],
  );

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
        {totalPrice}
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
          <div className="field has-addons has-addons-centered">
            <div className="control">
              <input
                {...name}
                className="input is-large is-info"
                type="text"
                placeholder="Enter your name..."
              />
            </div>
            <div className="control">
              <button
                type="submit"
                onClick={() => {
                  saveBucket({
                    owner: name.value,
                    cities: selectedCities,
                    cost: totalPrice,
                    country: selectedCountry,
                  });
                }}
                className="button is-large is-dark"
              >
                Save bucket!
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

CityList.propTypes = {};

export default CityList;
