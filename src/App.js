import React, { useEffect, useState } from 'react';
import { APIClient }                  from './config/constants';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIClient.get('countries');
        setData(response.data);
      } catch (e) {
        console.dir(e);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      {
        data.map((country) => (
          <p key={country}>{country}</p>
        ))
      }
    </div>
  );
};

export default App;
