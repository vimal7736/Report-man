import React, { useEffect } from 'react';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

const MyDateRangePicker = () => {
  useEffect(() => {
    const daterangepicker = new DateRangePickerComponent({
      placeholder: 'Select a range',
      min: new Date('1/15/2017'),
      max: new Date('12/20/2017'),
    });
    daterangepicker.appendTo('#daterangepicker');

    return () => {
      daterangepicker.destroy();
    };
  }, []); 
  return (
    <div>
      <input type="text" id="daterangepicker" />
    </div>
  );
};

export default MyDateRangePicker;
