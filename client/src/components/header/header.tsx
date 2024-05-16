import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header({ content }: { content: 'Events' | 'Participants' }): JSX.Element {
  return (
    <>
    <AppBar component='nav'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h5'>{content}</Typography>
        { content === 'Participants' ? <Button component={Link} to='/' color='success' variant='contained'>Back</Button> : ''}
      </Toolbar>
    </AppBar>
    <Toolbar />
    </>
  );
}
