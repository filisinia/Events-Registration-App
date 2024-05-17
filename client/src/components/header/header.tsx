import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Search from './search';
import Sorting from './sorting';
import styles from './headerStyle';
import { EventData } from '../../types/types';

interface HeaderProps {
  content: 'Events' | 'Participants';
  currentPage: number; 
  onSort?: (_eventsData: EventData[]) => void;
  onSearch?: (_text: string) => void;
}

export default function Header({ content, currentPage = 1, onSort, onSearch }: HeaderProps): JSX.Element {
  return (
    <>
      <AppBar component="nav">
        <Toolbar sx={styles.toolbar}>
          <Typography variant="h5">{content}</Typography>
          {content === 'Participants' ? (
            <Box sx={styles.controllers}>
              {onSearch ? <Search onSearch={onSearch} /> : ''}
              <Button component={Link} to="/" color="success" variant="contained">
                Back
              </Button>
            </Box>
          ) : (
            <Sorting currentPage={currentPage} onSort={onSort} />
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
