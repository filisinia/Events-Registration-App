import { Link } from 'react-router-dom';
import { Card, CardContent, Box, Grid, Typography, Button } from '@mui/material';
import { EventData } from '../../types/types';
import styles from './eventElemsStyle';

interface EventElemsProps {
  eventData: EventData[];
  registerBtnHandler: (_event: EventData) => void;
}

export default function EventElems({ eventData, registerBtnHandler }: EventElemsProps): JSX.Element {
  return (
    <Grid container spacing={3}>
      {eventData.map((event) => (
        <Grid item key={event.id} xs={12} sm={6} md={6} lg={4}>
          <Card variant="elevation" sx={{ height: '100%' }}>
            <CardContent sx={styles.cardContent}>
              <Typography variant="h6" fontWeight={600}>
                {event.title}
              </Typography>
              <Typography>{event.description}</Typography>
              <Box display="flex" justifyContent="space-between">
                <Typography>{event.organizer}</Typography>
                <Typography>{event.date}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button onClick={() => registerBtnHandler(event)}>Register</Button>
                <Button component={Link} to={`/people/${event.id}`}>
                  View
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
