import { Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "./participantsElemsStyle";
import { ParticipantData } from "../../types/types";

export default function ParticipantsElems({ participantsData }: {participantsData: ParticipantData[]}): JSX.Element {
  console.log(participantsData);
  
  return (
    <Grid container spacing={3}>
      {participantsData.map((participant) => (
        <Grid item key={participant.id} xs={12} sm={6} md={4} lg={3}>
          <Card variant='elevation' sx={{ height: '100%' }}>
            <CardContent sx={styles.cardContent}>
              <Typography variant='h6' fontWeight={600}>{participant.fullName}</Typography>
              <Typography>{participant.email}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
