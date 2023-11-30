import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

interface CalendarProps {
  date?: boolean;
  time?: boolean;
  datetime?: boolean;
  daterange?: boolean;
}

export const Calendar = ({ date, time, datetime, daterange }: CalendarProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    {date ? (
      <>
        <DateCalendar />
      </>
    ): (
      <>
        {time ? (
          <>
            <DemoContainer components={['TimePicker']}>
              <TimePicker label="Basic time picker" />
            </DemoContainer>
          </>
        ): ( 
          <>
            {datetime ? (
              <>
                <DemoContainer components={['DateTimePicker']}>
                  <DateTimePicker label="Basic date time picker" />
                </DemoContainer>
              </>
            ): ( 
              <>
                <DemoContainer components={['DateRangePicker']}>
                  <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
                </DemoContainer>
              </>
            )}
            
          </>
        )}
      </>
    )}
  </LocalizationProvider>
);

export default Calendar;