import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainCard from '../Components/TrainCard';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios
      .get('http://20.244.56.144/train/trains')
      .then((response) => {
        setTrains(response.data.trains); // Assuming the response.data is an object with a trains property
      })
      .catch((error) => {
        console.error('Error fetching all trains:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      {trains && trains.map((train) => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
};

export default AllTrainsPage;
