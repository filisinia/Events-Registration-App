import { Box, Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './registerPageStyle';
import { EventData } from '../../types/types';

interface RegisterPageProps {
  eventData: EventData;
  backBtnHandler: () => void;
}

export default function RegisterPage({eventData, backBtnHandler}: RegisterPageProps): JSX.Element {
  function handlerSubmit() {
    console.log('Submit');
  }

  function handlerChange() {
    console.log('Change');
  }

  return (
    <Container sx={styles.container}>
      <Container component='form' onSubmit={handlerSubmit} onChange={handlerChange} sx={styles.form}>
        <Typography variant='h5'>Registration on the {eventData.title} event</Typography>
        <TextField label='Full name' name='fullName' size='small' required />
          <TextField
            label='Email'
            name='email'
            type='email'
            size='small'
            required />
          <label htmlFor='dateOfBirth'>
            Date of birth
          </label>
          <TextField
            name='dateOfBirth'
            type='date'
            size='small'
            required
          />
          <FormLabel id="howDidYouHear">Where did you hear about this event?</FormLabel>
          <RadioGroup
            aria-labelledby="howDidYouHear"
            defaultValue="social media"
            name="radio-buttons-group"
            row
          >
            <FormControlLabel value="social media" control={<Radio />} label="Social media" />
            <FormControlLabel value="friends" control={<Radio />} label="Friends" />
            <FormControlLabel value="found myself" control={<Radio />} label="Found myself" />
          </RadioGroup>
          <Box>
            <Button onClick={backBtnHandler} variant='outlined'>Back</Button>
            <Button component={Link} to='/people' variant='contained'>Register</Button>
          </Box>
      </Container>
    </Container>
  );
}
