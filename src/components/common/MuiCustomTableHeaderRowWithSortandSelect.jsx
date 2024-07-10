import React from 'react';
import { TableRow, TableCell, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/styles';
import MuiCustomTableHeaderCellWithSortandSelect from './MuiCustomTableHeaderCellWithSortandSelect';

const MuiCustomTableHeaderRowWithSortandSelect = ({
  headerArray,
  sortHandler,
  selectHandler,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: '17px' }}>
      <TableRow
        sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          background: theme.palette.grey[100],
          borderRadius: '5px',
          height: '30px',}}
          
      >
        {headerArray?.map((header, index) => (
          <MuiCustomTableHeaderCellWithSortandSelect
            key={index}
            itemData={header}
            index={index}
            isSortable={header.isSortable}
            isSelectable={header.isSelectable}
            arrayLength={headerArray.length}
            sortHandler={sortHandler}
            selectHandler={selectHandler}
          />
        ))}
      </TableRow>
    </Box>
  );
};

export default MuiCustomTableHeaderRowWithSortandSelect;
