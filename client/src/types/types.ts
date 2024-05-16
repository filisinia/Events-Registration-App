export interface EventData {
  id: number;
  title: string;
  description: string;
  date: string;
  organizer: string;
}

export interface ParticipantData {
  eventId: number;
  fullName: string;
  email: string;
  dateOfBirth: string;
  howDidYouHear: 'social media' | 'friends' | 'found myself';
}
