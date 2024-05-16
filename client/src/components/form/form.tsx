import { Box, Button, Dialog, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import styles from './formStyle';
import { EventData } from '../../types/types';
import InputField from './inputField';
import { emailValidator, fullNameValidator } from './validators';
import { useRef } from 'react';

interface RegisterPageProps {
  eventData: EventData;
  closeDialog: () => void;
}

export default function RegistrationForm({eventData, closeDialog}: RegisterPageProps): JSX.Element {
  const formValid = useRef({ name: false, email: false });

  function handleSubmit () {
    if (Object.values(formValid.current).every(isValid => isValid)) {
      console.log("Form is valid! Submitting the form...");
    } else {
      console.log("Form is invalid! Please check the fields...");
    }
  };

  return (
    <Dialog open={!!eventData} onClose={closeDialog}>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={styles.form}>
        <Typography variant='h5'>Registration</Typography>
        <Typography variant='h5' fontWeight={600}>{eventData.title}</Typography>
        <InputField
          label="Full name"
          name='name'
          validator={fullNameValidator}
          onChange={isValid => (formValid.current.name = isValid)}
        />
        <InputField
          label="Email"
          name="email"
          validator={emailValidator}
          onChange={isValid => (formValid.current.email = isValid)}
        />
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
