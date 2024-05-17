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

export function getAllEvents(offset: number, sortBy: string): EventData[] {
  const sortingRequest = sortBy === 'none' ? '' : `ORDER BY ${sortBy}`;
  const requestString = `SELECT * FROM events ${sortingRequest} LIMIT 9 OFFSET ${offset}`;

  const statement = db.prepare(requestString);
  const events = statement.all() as EventData[];
  return events;
}

export function getEventsQuantity(): number {
  const requestString = 'SELECT COUNT(*) as count FROM events';
  const statement = db.prepare(requestString);
  const result = statement.get() as Partial<{ count: number }>;

  return typeof result.count === 'number' ? result.count : 0;
}

 export function getEventById(id: number): EventData | undefined {
  const statement = db.prepare('SELECT * FROM events WHERE id = ?');
  const event = statement.get(id) as EventData | undefined;
  return event;
}