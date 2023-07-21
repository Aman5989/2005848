import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TrainCard = ({ train }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {train.trainName}
        </Typography>
        <Typography variant="body1">Train Number: {train.trainNumber}</Typography>
        <Typography variant="body1">Departure Time: {train.departureTime}</Typography>
        <Typography variant="body1">Seats Available (Sleeper): {train.seatsAvailable.sleeper}</Typography>
        <Typography variant="body1">Seats Available (AC): {train.seatsAvailable.AC}</Typography>
        <Typography variant="body1">Price (Sleeper): {train.price.sleeper}</Typography>
        <Typography variant="body1">Price (AC): {train.price.AC}</Typography>
        <Typography variant="body1">Delayed By: {train.delayedBy} minutes</Typography>
      </CardContent>
    </Card>
  );
};

export default TrainCard;
