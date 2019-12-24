import React                                       from 'react';
import { fireEvent, render, wait, waitForElement } from '@testing-library/react';
import { APIClient }                               from './config/constants';

import '@testing-library/jest-dom/extend-expect';

import App from './App';

window.scrollTo = jest.fn();
window.alert = jest.fn();

const mockAxiosWithCustomData = (mockedData) => {
  APIClient.mockImplementationOnce(() => Promise.resolve(mockedData));
};

describe('App', () => {
  it('Should save a bucket with some data', async () => {
    mockAxiosWithCustomData({
      data: [
        {
          id: 1,
          name: 'Venezuela',
        },
      ],
    });

    const { getByTestId, getByText, getAllByTestId } = render(<App />);

    // First section
    // Click 'Lets go!' button
    fireEvent.click(getByText('Lets go!'));

    // Second section
    // Select a country
    await waitForElement(() => getByTestId('country'));

    mockAxiosWithCustomData({
      data: [
        {
          id: 1,
          name: 'Rubio',
          price: 1600,
        },
        {
          id: 2,
          name: 'San Cristobal',
          price: 1600,
        },
      ],
    });

    fireEvent.click(getByTestId('country'));

    // Third section
    // Input the budget
    fireEvent.change(getByTestId('budget-button'), { target: { value: 10000 } });
    await wait();
    fireEvent.click(getByText('Save budget!'));

    // Fourth section
    // Select some cities
    await waitForElement(() => getAllByTestId('city'));
    getAllByTestId('city')
      .map((el) => fireEvent.click(el));

    // Fifth section
    // Save the budget
    fireEvent.click(getByText('Save bucket!'));

    const finalData = {
      url: 'save-bucket',
      method: 'post',
      data: {
        cities: [
          1,
          2,
        ],
        cost: 3200,
        country: 1,
        owner: 'Anna Doe',
      },
    };

    expect(APIClient)
      .toHaveBeenCalledTimes(3);
    // Verify the final API Call with the proper data
    expect(APIClient)
      .toHaveBeenCalledWith(finalData);
  });
});
