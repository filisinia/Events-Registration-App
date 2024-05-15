import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export interface EventData {
  title: string;
  description: string;
  date: string;
  organizer: string;
}

function App() {
  const [events, setEvents] = useState<EventData[]>([]);

  const eventElems = events.map((event: EventData, index) => (
    <Box key={index}>
      <Typography>{event.title}</Typography>
      <Typography>{event.description}</Typography>
      <Typography>{event.organizer}</Typography>
      <Typography>{event.date}</Typography>
    </Box>
  ));

  useEffect(() => {
    fetch('/events')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(eventsData => {
        console.log('DATA DATA DATA', eventsData);
        setEvents(eventsData);
      })
      .catch((error) => {
        throw new Error(`Problem with getting data from server: ${error.message}`);
      });
  }, []);

  return (
    <div>
      { events.length === 0 ? <span>Loading...</span> : <div>{eventElems}</div> }
      <br />
    </div>
  );
}

export default App;
