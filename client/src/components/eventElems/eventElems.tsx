import { Card, CardContent, Box, Grid, Typography, Button } from "@mui/material";
import { EventData } from "../../types/types";
import styles from "./eventElemsStyle";

export default function EventElems({ eventData }: { eventData: EventData[] }): JSX.Element {
  return (
    <Grid container spacing={3}>
      {eventData.map((event, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card variant='elevation' sx={{ height: '100%' }}>
            <CardContent sx={styles.cardContent}>
              <Typography variant='h6' fontWeight={600}>{event.title}</Typography>
              <Typography>{event.description}</Typography>
              <Box display='flex' justifyContent='space-between'>
                <Typography>{event.organizer}</Typography>
                <Typography>{event.date}</Typography>
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Button>Register</Button>
                <Button>View</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
