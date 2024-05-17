import Header from '../../components/header/header';
import { getAllParticipants } from '../../api/server-functions';
import { ParticipantData } from '../../types/types';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import ParticipantsElems from '../../components/participantsElems/participantsElems';
import { useParams } from 'react-router-dom';

export default function ParticipantsPage() {
  const [participants, setParticipants] = useState<ParticipantData[]>([]);
  const [searchText, setSearchText] = useState('');
  const eventId = Number(useParams().id);

  useEffect(() => {
    (async () => {
      const participantsData = await getAllParticipants(eventId);
      if (participantsData) setParticipants(participantsData);
    })();
  }, [eventId]);

  function filterParticipants(participant: ParticipantData) {
    const searchLowerCase = searchText.toLowerCase();
    return (
      participant.fullName.toLowerCase().includes(searchLowerCase) ||
      participant.email.toLowerCase().includes(searchLowerCase)
    );
  }

  return (
    <>
      <Header currentPage={1} content="Participants" onSearch={setSearchText} />
      <Container sx={{ paddingTop: '20px' }}>
        {participants.length === 0 ? (
          <span>Loading...</span>
        ) : (
          <ParticipantsElems participantsData={participants.filter(filterParticipants)} />
        )}
      </Container>
    </>
  );
}
