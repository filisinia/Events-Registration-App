import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// import styles from './errorPageStyle';
import styles from 'pages/errorPage/errorPageStyle';

const ErrorPage = (): JSX.Element => (
  <Box sx={styles.container}>
    <Typography variant="h1" component="h2" lineHeight="0.8">
      404
    </Typography>
    <Typography>Page not found</Typography>
    <Button component={Link} to="/" variant="outlined">
      Go to events
    </Button>
  </Box>
);

export default ErrorPage;
