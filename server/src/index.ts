import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { getAllEvents, getEventById } from './db/events';
import { getAllParticipants, addParticipant } from './db/participants';
import { ParticipantData } from './types/types';

const app: Express = express();

app.set('port', 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/events', (req, res) => {
  const sortBy = req.query.sort;
  let events = getAllEvents();

  if (sortBy) {
    switch (sortBy) {
      case 'title':
        events = events.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'date':
        events = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'organizer':
        events = events.sort((a, b) => a.organizer.localeCompare(b.organizer));
        break;
      default:
        break;
    }
  }

  res.json(events);
});


app.get('/events/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const event = getEventById(id);
  if (event) res.json(event);
});

app.post('/participants', (req: Request, res: Response) => {
  const participantData: ParticipantData = req.body;
  addParticipant(participantData);
  res.send('Participant registered successfully');
});

app.get('/participants/:eventId', (req: Request, res: Response) => {
  const eventId = parseInt(req.params.eventId);
  const participants = getAllParticipants(eventId);
  res.json(participants);
});

app.listen(app.get('port'), () => {
  console.log(`Server is available at http://localhost:${app.get('port')}`);
});
