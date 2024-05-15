import db from './db';
import eventsData from '../data/eventsData';
import { EventData } from '../types/types';

db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    date TEXT,
    organizer TEXT
  )
`);

function addEvent(eventData: EventData): void {
  const insert = db.prepare('INSERT INTO events (title, description, date, organizer) VALUES (?, ?, ?, ?)');
  insert.run(eventData.title, eventData.description, eventData.date, eventData.organizer);
}

eventsData.forEach(eventData => {
  addEvent(eventData);
});

export function getAllEvents(): EventData[] {
  const statement = db.prepare('SELECT * FROM events');
  const events = statement.all() as EventData[];
  return events;
}

 export function getEventById(id: number): EventData | undefined {
  const statement = db.prepare('SELECT * FROM events WHERE id = ?');
  const event = statement.get(id) as EventData | undefined;
  return event;
}