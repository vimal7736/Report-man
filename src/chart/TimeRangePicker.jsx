import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import ClockSVG from './Clock';

const TimeRangePicker = () => {
  const [fromTime, setFromTime] = useState(new Date());
  const [toTime, setToTime] = useState(new Date());

  const handleFromTimeChange = (newTime) => {
    setFromTime(newTime);
  };

  const handleToTimeChange = (newTime) => {
    setToTime(newTime);
  };

  return (
    <div>
      <div>
        <label>From Time:</label>
        <DateTimePicker
          onChange={handleFromTimeChange}
          value={fromTime}
          format="HH:mm" // Specify the format for displaying time
        />
      </div>
      <div>
        <label>To Time:</label>
        <DateTimePicker
          onChange={handleToTimeChange}
          value={toTime}
          format="HH:mm" // Specify the format for displaying time
        />
      </div>
      <div>
        <label>Clock:</label>
        <ClockSVG />
      </div>
    </div>
  );
};

export default TimeRangePicker;
