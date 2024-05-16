import { useState, useEffect } from "react";
import getAllEvents from "../api/server-functions";
import { Container } from "@mui/material";
import Header from "../components/header/header";
import EventElems from "../components/eventElems/eventElems";
import { EventData } from "../types/types";

export default function EventsPage() {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect( () => {
    (async () => {
      const eventsData = await getAllEvents();
      if (eventsData) setEvents(eventsData);
    })();
  }, []);

  return (
    <>
    <Header content='Events' />
    <Container sx={{ padding: '20px 0' }}>
      { events.length === 0 ? <span>Loading...</span> : <EventElems eventData={events} /> }
    </Container>
    </>
  );
}
