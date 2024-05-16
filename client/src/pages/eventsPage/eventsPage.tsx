import { useState, useEffect } from 'react';
import { getAllEvents } from '../../api/server-functions';
import { Container } from '@mui/material';
import Header from '../../components/header/header';
import EventElems from '../../components/eventElems/eventElems';
import { EventData } from '../../types/types';
import RegistrationForm from '../../components/form/form';

export default function EventsPage() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  function registerBtnHandler(event: EventData): void {
    setSelectedEvent(event);
  }

  function closeDialog(): void {
    setSelectedEvent(null);
  }

  useEffect(() => {
    (async () => {
      const eventsData = await getAllEvents();
      if (eventsData) setEvents(eventsData);
    })();
  }, []);

  return (
    <>
      <Header content="Events" onSort={setEvents} />
      <Container sx={{ paddingTop: '20px' }}>
        {events.length === 0 ? (
          <span>Loading...</span>
        ) : (
          <EventElems eventData={events} registerBtnHandler={registerBtnHandler} />
        )}
      </Container>
      {selectedEvent ? <RegistrationForm eventData={selectedEvent} closeDialog={closeDialog} /> : ''}
    </>
  );
}
