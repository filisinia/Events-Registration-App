import { Box, Typography } from "@mui/material";
import { EventData } from "../../types/types";

export default function EventElems({ eventData }: { eventData: EventData[] }): JSX.Element {
  return (
    <div>
      {eventData.map((event, index) => (
        <Box key={index}>
          <Typography>{event.title}</Typography>
          <Typography>{event.description}</Typography>
          <Typography>{event.organizer}</Typography>
          <Typography>{event.date}</Typography>
        </Box>
      ))}
    </div>
  );
}
