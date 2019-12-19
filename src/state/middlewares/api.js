import { bucketTypes } from '../ducks/bucket';
import { APIClient }   from '../../config/constants';

// Middleware for standard api calls from redux
const apiCall = ({ dispatch }) => (next) => async (action) => {
  const { type, payload } = action;
  if (type !== bucketTypes.API_CALL) {
    return next(action);
  }

  const { config, onSuccess, onError } = payload;

  let error = null;

  try {
    dispatch({ type: bucketTypes.START_CALL });
    const response = await APIClient(config);
    if (onSuccess) {
      onSuccess(response.data, dispatch);
    }
  } catch (e) {
    console.dir(e);
    if (onError) {
      onError(e, dispatch);
    }
    error = e;
  } finally {
    dispatch({
      type: bucketTypes.END_CALL,
      payload: error,
    });
  }
};

export default [apiCall];
