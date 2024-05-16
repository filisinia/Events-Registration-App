import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "./search";
import styles from "./headerStyle";

interface HeaderProps {
  content: 'Events' | 'Participants';
  onSearch?: (_text: string) => void;
}

export default function Header({ content, onSearch }: HeaderProps): JSX.Element {
  return (
    <>
    <AppBar component='nav'>
      <Toolbar sx={styles.toolbar}>
        <Typography variant='h5'>{content}</Typography>
        { content === 'Participants' ?
        <Box sx={styles.controllers}>
          {onSearch ? <Search onSearch={onSearch}/> : ''}
          <Button component={Link} to='/' color='success' variant='contained'>Back</Button>
        </Box> : ''}
      </Toolbar>
    </AppBar>
    <Toolbar />
    </>
  );
}
