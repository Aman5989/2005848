import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainCard from '../Components/TrainCard';

const SingleTrainPage = ({ match }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const { trainNumber } = match.params;
    axios
      .get(`http://20.244.56.144/train/trains/${trainNumber}`)
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error('Error fetching single train:', error);
      });
  }, [match.params]);

  return (
    <div>
      {train ? (
        <TrainCard train={train} />
      ) : (
        <p>Loading train details...</p>
      )}
    </div>
  );
};

export default SingleTrainPage;
