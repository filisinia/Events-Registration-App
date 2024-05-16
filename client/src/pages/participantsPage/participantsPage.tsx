import Header from "../../components/header/header";
import { getAllParticipants } from "../../api/server-functions";
import { ParticipantData } from "../../types/types";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import ParticipantsElems from "../../components/participantsElems/participantsElems";
import { useParams } from "react-router-dom";

export default function ParticipantsPage() {
  const [participants, setParticipants] = useState<ParticipantData[]>([]);
  const eventId = Number(useParams().id);

  useEffect(() => {
    (async () => {
      const eventsData = await getAllParticipants(eventId);
      if (eventsData) setParticipants(eventsData);
      console.log(eventsData);
    })();
  }, [eventId]);

  return (
    <>
    <Header content='Participants' />
    <Container sx={{paddingTop: '20px'}}>
      {participants.length === 0 ? <span>Loading...</span> : <ParticipantsElems participantsData={participants} />}
    </Container>
    </>
  );
}
