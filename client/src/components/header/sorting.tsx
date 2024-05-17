import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styles from './headerStyle';
import { EventData, SortingParams } from '../../types/types';
import { useEffect, useState } from 'react';
import { getAllEvents } from '../../api/server-functions';

interface SortingFunctionParams {
  currentPage: number;
  onSort?: (_eventsData: EventData[]) => void;
}

export default function Sorting({ currentPage, onSort }: SortingFunctionParams): JSX.Element {
  const [selectedSort, setSelectedSort] = useState<SortingParams>('none');
  const selectItemNames: SortingParams[] = ['title', 'date', 'organizer', 'none'];

  const selectItems = selectItemNames.map((selectItemName) => (
    <MenuItem key={selectItemName} value={selectItemName} onClick={() => setSelectedSort(selectItemName)}>
      {selectItemName.charAt(0).toUpperCase() + selectItemName.slice(1)}
    </MenuItem>
  ));

  useEffect(() => {
    async function sortEvents() {
      if (!onSort) return;
      const sortedEvents = await getAllEvents(currentPage, selectedSort);
      if (sortedEvents) onSort(sortedEvents.events);
    }

    sortEvents();
  }, [currentPage, selectedSort, onSort]);

  return (
    <FormControl size="small" sx={styles.sort} variant="filled">
      <InputLabel id="sorting">Sort by</InputLabel>
      <Select labelId="sorting" label="Sort by" defaultValue="none">
        {selectItems}
      </Select>
    </FormControl>
  );
}
