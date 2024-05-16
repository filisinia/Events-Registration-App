import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./headerStyle";
import { EventData, SortingParams } from "../../types/types";
import { useEffect, useState } from "react";
import { getAllEvents } from "../../api/server-functions";

export default function Sorting({ onSort }: { onSort?: (_eventsData: EventData[]) => void}): JSX.Element {
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
      const sortedEvents = await getAllEvents(selectedSort);
      if (sortedEvents) onSort(sortedEvents);
    }
  
    sortEvents();
  }, [selectedSort, onSort]);

  return (
    <FormControl size="small" sx={styles.sort} variant='filled'>
      <InputLabel id="sorting">Sort by</InputLabel>
      <Select
        labelId="sorting"
        label="Sort by"
        defaultValue='none'
      >
        {selectItems}
      </Select>
    </FormControl>
  );
}
