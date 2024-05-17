import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { getAllEvents, getEventById, getEventsQuantity } from './db/events';
import { getAllParticipants, addParticipant } from './db/participants';
import { ParticipantData } from './types/types';

const app: Express = express();

app.set('port', 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/events', (req: Request, res: Response) => {
  const sortBy = String(req.query.sort);
  const page = Number(req.query.page) || 1;
  const limit = 9;
  const offset = (page - 1) * limit;

  const events = getAllEvents(offset, sortBy);
  const eventsQuantity = getEventsQuantity();
  const pagesQuantity = Math.ceil(eventsQuantity / limit);

  res.json({events, pagesQuantity});
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
