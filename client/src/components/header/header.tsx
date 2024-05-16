import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header({ content }: { content: string }): JSX.Element {
  return (
    <>
    <AppBar component='nav'>
      <Toolbar>
        <Typography variant='h5'>{content}</Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
    </>
  );
}
