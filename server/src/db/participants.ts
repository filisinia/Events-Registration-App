import db from './db';
import participantsData from '../data/participantsData'
import { ParticipantData } from '../types/types';

db.exec(`
  CREATE TABLE IF NOT EXISTS participants (
    id INTEGER PRIMARY KEY,
    eventId INTEGER,
    fullName TEXT,
    email TEXT,
    dateOfBirth TEXT,
    howDidYouHear TEXT,
    FOREIGN KEY (eventId) REFERENCES events(id)
  )
`);

export function getAllParticipants(eventId: number): ParticipantData[] | undefined {
  const statement = db.prepare('SELECT * FROM participants WHERE eventId = ?');
  const participants = statement.all(eventId) as ParticipantData[] | undefined;
  return participants;
}

export function addParticipant(participantData: ParticipantData): void {
  const insert = db.prepare('INSERT INTO participants (eventId, fullName, email, dateOfBirth, howDidYouHear) VALUES (?, ?, ?, ?, ?)');
  insert.run(participantData.eventId, participantData.fullName, participantData.email, participantData.dateOfBirth, participantData.howDidYouHear);
}

participantsData.forEach(participantData => {
  addParticipant(participantData);
});
