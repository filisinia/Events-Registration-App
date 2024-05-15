import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

import { getAllEvents, getEventById } from './db/events';
import { getAllParticipants, addParticipant } from './db/participants';

const app: Express = express();

app.set('port', 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/events', (req: Request, res: Response) => {
  const events = getAllEvents();
  res.json(events);
  res.send(events);
});

app.get('/events/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const event = getEventById(id);
  if (event) res.json(event);
});

app.post('/participants', (req: Request, res: Response) => {
  const participantData = req.body;
  addParticipant(participantData);
  res.send('Participant registered successfully');
});

app.get('/participants/:eventId', (req: Request, res: Response) => {
  const eventId = parseInt(req.params.eventId);
  const participants = getAllParticipants(eventId);
  res.json(participants);
});

app.listen(app.get('port'), () => {
  console.log(`Web app is available at http://localhost:${app.get('port')}`);
});
