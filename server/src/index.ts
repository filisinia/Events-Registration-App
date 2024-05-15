import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Express = express();

app.set('port', 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('events');
});

app.get('/events/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  console.log('Fetching:', id);
  res.send('events[id]');
});

app.post('/events', (req: Request, res: Response) => {
  const event = {
    name: req.body.name,
  };
  res.send(event);
});

app.listen(app.get('port'), () => {
  console.log(`Web app is available at http://localhost:${app.get('port')}`);
});

export default app;
