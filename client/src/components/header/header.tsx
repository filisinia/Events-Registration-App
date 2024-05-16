import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "./search";
import styles from "./headerStyle";

export default function Header({ content }: { content: 'Events' | 'Participants' }): JSX.Element {
  return (
    <>
    <AppBar component='nav'>
      <Toolbar sx={styles.toolbar}>
        <Typography variant='h5'>{content}</Typography>
        { content === 'Participants' ?
        <Box sx={styles.controllers}>
          <Search />
          <Button component={Link} to='/' color='success' variant='contained'>Back</Button>
        </Box> : ''}
      </Toolbar>
    </AppBar>
    <Toolbar />
    </>
  );
}
