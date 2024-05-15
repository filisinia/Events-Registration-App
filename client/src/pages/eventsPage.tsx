import { useState, useEffect } from "react";
import getAllEvents from "../api/server-functions";
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
    <div>
      { events.length === 0 ? <span>Loading...</span> : <div><EventElems eventData={events} /></div> }
      <br />
    </div>
  );
}
