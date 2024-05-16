import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./headerStyle";

export default function Sorting(): JSX.Element {
  return (
    <FormControl size="small" sx={styles.sort} variant='filled'>
      <InputLabel id="sorting">Sort by</InputLabel>
      <Select
        labelId="sorting"
        label="Sort by"
        defaultValue='none'
      >
        <MenuItem value='title'>Title</MenuItem>
        <MenuItem value='date'>Date</MenuItem>
        <MenuItem value='organizer'>Organizer</MenuItem>
        <MenuItem value='none'>None</MenuItem>
      </Select>
    </FormControl>
  );
}
