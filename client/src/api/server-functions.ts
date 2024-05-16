import axios from 'axios';
import { EventData, ParticipantData } from '../types/types';

export async function getAllEvents(sort?: string): Promise<EventData[] | null> {
  try {
    const response = await fetch(`/events/?sort=${sort}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const eventsData = await response.json();
    return eventsData;
  } catch (error) {
    if (error instanceof Error) throw new Error(`Problem with getting data from server: ${error.message}`);
    return null;
  }
}

export async function submitForm(participantData: ParticipantData): Promise<void> {
  try {
    const response = await axios.post('http://localhost:3001/participants', participantData);
    return response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(`Problem with submitting the form: ${error.message}`);
  }
}

export async function getAllParticipants(eventId: number): Promise<ParticipantData[] | null> {
  try {
    const response = await fetch(`/participants/${eventId}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const eventsData = await response.json();
    return eventsData;
  } catch (error) {
    if (error instanceof Error) throw new Error(`Problem with getting data from server: ${error.message}`);
    return null;
  }
}
