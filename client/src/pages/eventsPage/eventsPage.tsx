import { useState, useEffect } from 'react';
import { getAllEvents } from '../../api/server-functions';
import { Box, Container, Pagination } from '@mui/material';
import Header from '../../components/header/header';
import EventElems from '../../components/eventElems/eventElems';
import { EventData } from '../../types/types';
import RegistrationForm from '../../components/form/form';

export default function EventsPage() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  function registerBtnHandler(event: EventData): void {
    setSelectedEvent(event);
  }

  function closeDialog(): void {
    setSelectedEvent(null);
  }

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number): void {
    setCurrentPage(page);
  }

  useEffect(() => {
    (async () => {
      const eventsData = await getAllEvents(currentPage);
      if (eventsData) setEvents(eventsData);
    })();
  }, [currentPage]);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100svh'}}>
      <Header currentPage={currentPage} content="Events" onSort={setEvents} />
      <Container sx={{ paddingTop: '20px', flexGrow: '1' }}>
        {events.length === 0 ? (
          <span>Loading...</span>
        ) : (
          <EventElems eventData={events} registerBtnHandler={registerBtnHandler} />
        )}
      </Container>
      {selectedEvent ? <RegistrationForm eventData={selectedEvent} closeDialog={closeDialog} /> : ''}
      <Pagination
        count={10}
        color="primary"
        onChange={handlePageChange}
        sx={{margin: '25px', display: 'flex', justifyContent: 'center'}}
        />
    </Box>
  );
}
