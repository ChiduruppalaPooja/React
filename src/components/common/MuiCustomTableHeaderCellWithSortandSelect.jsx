import React, { useState } from 'react';
import { TableCell, Typography, Stack, IconButton, Menu, MenuItem, Checkbox } from '@mui/material';
import { useTheme } from '@mui/styles';
import ArrowUpIcon from './ArrowDown';

const options = [
  { id: 1, value: 'Timeout' },
  { id: 2, value: 'Interrupted' },
  { id: 3, value: 'On Submit' },
  { id: 4, value: 'Tabswitch' },
];

const ITEM_HEIGHT = 48;

const MuiCustomTableHeaderCellWithSortandSelect = ({
  itemData,
  index,
  isSortable,
  isSelectable,
  arrayLength,
  sortHandler,
  selectHandler,
}) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const submissionTypesToShowinStudentTable = [1, 2, 3];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    sortHandler(newSortOrder, index);
    setSortOrder(newSortOrder);
  };

  return (
    <TableCell
      sx={{
        padding: '9px 8.95px 11px 12px',
        borderRadius:
          index === 0
            ? '5px 0 0 5px'
            : index === arrayLength - 1
            ? '0 5px 5px 0'
            : '0',
        border: '1px solid brown',
        flex: 1,
        border: 'none',
      }}
    >
      <Stack direction='row' alignItems='center'>
        <Typography
          variant='subtitle3'
          sx={{
            color: theme.palette.grey[500],
            lineHeight: '1rem',
          }}
        >
          {itemData.label}
        </Typography>
        {isSortable && (
          <IconButton
            aria-label='sort'
            sx={{ padding: '0', border: '1px solid red' }}
            onClick={changeSortOrder}
          >
            <ArrowUpIcon fontSize='small' color={theme.palette.grey[500]} />
          </IconButton>
        )}
        {isSelectable && (
          <>
            <IconButton
              aria-label='select'
              sx={{ padding: '0' }}
              onClick={handleClick}
            >
              <ArrowUpIcon color={theme.palette.grey[500]} />
            </IconButton>
            <Menu
              id='long-menu'
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option.id} sx={{ padding: '0' }}>
                  <Stack direction='row' alignItems='center'>
                    <Checkbox
                      size='small'
                      sx={{
                        '&.Mui-checked': {
                          color: 'primary',
                        },
                      }}
                      onChange={(e) => selectHandler(e, option.id)}
                      checked={submissionTypesToShowinStudentTable.includes(option.id)}
                    />
                    <Typography
                      variant='body1'
                      sx={{
                        color: theme.palette.grey[900],
                        
                      }}
                    >
                      {option.value}
                    </Typography>
                  </Stack>
                </MenuItem>
              ))}
              <MenuItem
                onClick={(e) => {
                  selectHandler(e, 5);
                  handleClose();
                }}
                sx={{ justifyContent: 'center' }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    color: theme.palette.info[700],
                    fontWeight: 500,
                  }}
                >
                  Clear all
                </Typography>
              </MenuItem>
            </Menu>
          </>
        )}
      </Stack>
    </TableCell>
  );
};

export default MuiCustomTableHeaderCellWithSortandSelect;
