import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import EventsPage from "../pages/eventsPage/eventsPage";
import ParticipantsPage from '../pages/participantsPage/participantsPage';
import ErrorPage from '../pages/errorPage/errorPage';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <CssBaseline>
          <Routes>
            <Route element={<EventsPage />} path='/' />
            <Route element={<ParticipantsPage/>} path='/people/:id' />
            <Route element={<ErrorPage />} path='*' />
          </Routes>
      </CssBaseline>
    </BrowserRouter>
  );
}
