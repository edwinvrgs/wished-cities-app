import React                        from 'react';
import { useSelector }              from 'react-redux';
import { useActions, useFormInput } from '../../hooks';
import { bucketActions }            from '../../state/ducks/bucket';
import PropTypes                    from 'prop-types';

const BudgetInput = ({ onClick }) => {
  const { selectedCountry } = useSelector(({ bucket }) => bucket);
  const { updateBudget } = useActions(bucketActions);
  const budget = useFormInput(0);
  return (
    <div className="field has-addons has-addons-centered">
      <div className="control">

        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input
          {...budget}
          data-testid="budget-button"
          className="input is-large is-info"
          type="text"
          placeholder="Your budget..."
          disabled={!selectedCountry}
        />
        {
          !selectedCountry && (
            <p className="help is-danger">You have to select a country first!</p>
          )
        }
      </div>
      <div className="control">
        <button
          type="submit"
          onClick={() => {
            updateBudget(budget.value);
            onClick();
          }}
          className="button is-large is-dark"
        >
          Save budget!
        </button>
      </div>
    </div>
  );
};

BudgetInput.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BudgetInput;
