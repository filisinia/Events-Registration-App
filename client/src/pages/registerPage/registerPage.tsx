import { Box, Button, Dialog, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import styles from './registerPageStyle';
import { EventData } from '../../types/types';
import { FormEvent } from 'react';

interface RegisterPageProps {
  eventData: EventData;
  closeDialog: () => void;
}

export default function RegisterPage({eventData, closeDialog}: RegisterPageProps): JSX.Element {
  function handlerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submit');
  }

  function handlerChange() {
    console.log('Change');
  }

  return (
    <Dialog open={!!eventData} onClose={closeDialog}>
      <Box component="form" onSubmit={handlerSubmit} onChange={handlerChange} sx={styles.form}>
        <Typography variant='h5'>Registration</Typography>
        <Typography variant='h5' fontWeight={600}>{eventData.title}</Typography>
        <TextField label='Full name' name='fullName' size='small' required />
          <TextField
            label='Email'
            name='email'
            type='email'
            size='small'
            required />
          <FormLabel id="dateOfBirth">Date of birth</FormLabel>
          <TextField
            aria-labelledby="dateOfBirth"
            name='dateOfBirth'
            type='date'
            size='small'
            required
          />
          <FormLabel id="howDidYouHear">Where did you hear about this event?</FormLabel>
          <RadioGroup
            aria-labelledby="howDidYouHear"
            defaultValue="social media"
            name="howDidYouHear"
            row
          >
            <FormControlLabel value="social media" control={<Radio />} label="Social media" />
            <FormControlLabel value="friends" control={<Radio />} label="Friends" />
            <FormControlLabel value="found myself" control={<Radio />} label="Found myself" />
          </RadioGroup>
          <Box>
            <Button onClick={closeDialog} variant='outlined'>Back</Button>
            <Button type='submit' variant='contained'>Register</Button>
          </Box>
      </Box>
    </Dialog>
  );
}
