import React from 'react';
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  Paper,
  Stack,
  Pagination,
} from '@mui/material';
import MuiCustomTableHeaderRowWithSortandSelect from './MuiCustomTableHeaderRowWithSortandSelect';
import MuiCustomStudentTableRow from './MuiCustomStudentTableRow';

const MuiCustomTableWithSortandSelect = ({
  HeaderArr,
  tableData,
  viewStudentResult,
  sortHandler,
  selectHandler,
  currentPageforTablepaginaton,
  tablePaginationHandler,
  filtered_studentAssessmentList,
  submissionTypesToShowinStudentTable,
}) => {
  const rowsPerPage = 8;

  const totalPages = Math.ceil(filtered_studentAssessmentList.length / rowsPerPage);

  const startIndex = (currentPageforTablepaginaton - 1) * rowsPerPage;
  console.log('filtered data',filtered_studentAssessmentList);
  const currentTableData = filtered_studentAssessmentList.slice(startIndex, startIndex + rowsPerPage);
  
  const paginationStyles = {
    '& .Mui-selected': {
      backgroundColor: (theme) => theme.palette.primary.main,
      color: '#FFF',
      width: '24px',
      borderRadius: '25px',
      flexShrink: 0,
    },
    '& .MuiPaginationItem-page.Mui-selected:hover': {
      backgroundColor: (theme) => theme.palette.primary.main,
      color: '#FFF',
    },
    '& .MuiPaginationItem-page:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
    '& .MuiPaginationItem-previous, & .MuiPaginationItem-next': {
      backgroundColor: '#E0E0E0',
      '&:hover': {
        backgroundColor: (theme) => theme.palette.grey[200],
      },
    },
  };

  return (
    <>
      <Paper sx={{ boxShadow: 'none', margin: '0 12px 0 14px' }}>
        <Table sx={{ width: '100%' }} aria-label='sticky table'>
          <TableHead sx={{ zIndex: 100, background: 'white', maxHeight: '30px' }}>
            <MuiCustomTableHeaderRowWithSortandSelect
              headerArray={HeaderArr}
              sortHandler={sortHandler}
              selectHandler={selectHandler}
              
            />
          </TableHead>
          <TableBody sx={{ height: '385px' }}>
            {currentTableData?.map((stu, i) => (
              <MuiCustomStudentTableRow
                stu={stu}
                key={i}
                viewStudentResult={viewStudentResult}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{ marginTop: '1rem' }}
      >
        <Pagination
          count={totalPages}
          page={currentPageforTablepaginaton}
          onChange={tablePaginationHandler}
          sx={paginationStyles}
        />
      </Stack>
    </>
  );
};

export default MuiCustomTableWithSortandSelect;
