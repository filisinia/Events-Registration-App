import { Box, Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './registerPageStyle';

export default function RegisterPage() {
  function handlerSubmit() {
    console.log('Submit');
  }

  function handlerChange() {
    console.log('Change');
  }

  return (
    <Container component='form' onSubmit={handlerSubmit} onChange={handlerChange} sx={styles.container}>
      <Typography variant='h5'>Event Registration</Typography>
      <TextField label='Full name' name='fullName' required />
        <TextField label='Email' name='email' type='email' required />
        <label htmlFor='dateOfBirth'>
          Date of birth
        </label>
        <TextField
          name='dateOfBirth'
          required
          type='date'
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
          <Button component={Link} to='/' variant='outlined' size='large'>Back</Button>
          <Button component={Link} to='/people' variant='contained' size='large'>Register</Button>
        </Box>
    </Container>
  );
}
