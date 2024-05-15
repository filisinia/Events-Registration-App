import { useEffect, useState } from 'react';
import EventElems from './components/eventElems/eventElems';
import { EventData } from './types/types';
import getAllEvents from './api/server-functions';

function App() {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect( () => {
    (async () => {
      const eventsData = await getAllEvents();
      if (eventsData) setEvents(eventsData);
    })();
  }, []);

  return (
    <div>
      { events.length === 0 ? <span>Loading...</span> : <div><EventElems eventData={events} /></div> }
      <br />
    </div>
  );
}

export default App;
