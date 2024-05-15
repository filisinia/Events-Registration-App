import db from './db';
import participantsData from '../data/participantsData'
import { ParticipantData } from '../types/types';

db.exec(`
  CREATE TABLE IF NOT EXISTS participants (
    id INTEGER PRIMARY KEY,
    event_id INTEGER,
    full_name TEXT,
    email TEXT,
    date_of_birth TEXT,
    how_did_you_hear TEXT,
    FOREIGN KEY (event_id) REFERENCES events(id)
  )
`);

export function getAllParticipants(eventId: number): ParticipantData[] | undefined {
  const statement = db.prepare('SELECT * FROM participants WHERE event_id = ?');
  const participants = statement.all(eventId) as ParticipantData[] | undefined;
  return participants;
}

export function addParticipant(participantData: ParticipantData): void {
  const insert = db.prepare('INSERT INTO participants (event_id, full_name, email, date_of_birth, how_did_you_hear) VALUES (?, ?, ?, ?, ?)');
  insert.run(participantData.eventId, participantData.fullName, participantData.email, participantData.dateOfBirth, participantData.howDidYouHear);
}

participantsData.forEach(participantData => {
  addParticipant(participantData);
});
