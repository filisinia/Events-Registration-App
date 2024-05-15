import db from './db';
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

export function registerParticipant(participantData: ParticipantData): void {
  const insert = db.prepare('INSERT INTO participants (event_id, full_name, email, date_of_birth, how_did_you_hear) VALUES (?, ?, ?, ?, ?)');
  insert.run(participantData.eventId, participantData.fullName, participantData.email, participantData.dateOfBirth, participantData.howDidYouHear);
}
