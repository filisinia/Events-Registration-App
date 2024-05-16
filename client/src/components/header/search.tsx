import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './headerStyle';

export default function Search({ onSearch }: { onSearch: (_text: string) => void }): JSX.Element {
  return (
    <Box sx={styles.search}>
      <InputBase
        sx={{ width: '150px' }}
        size="small"
        placeholder="Search a person"
        onChange={(e) => onSearch(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
