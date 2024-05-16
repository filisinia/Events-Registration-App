import { EventData } from "../types/types";

export default async function getAllEvents(): Promise<EventData[] | null> {
  try {
    const response = await fetch('/events');
    if (!response.ok) throw new Error('Network response was not ok');
    const eventsData = await response.json();
    return eventsData;
  } catch (error) {
    if (error instanceof Error) throw new Error(`Problem with getting data from server: ${error.message}`);
    return null;
  }
}
