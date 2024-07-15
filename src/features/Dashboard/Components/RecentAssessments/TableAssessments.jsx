import React, { useState, useEffect, useMemo, useCallback } from 'react';
import LabelsTable from './LabelsTable';
import { Stack, Box, Typography, Link } from '@mui/material';
import MuiCustomTableWithSortandSelect from '../../../../components/common/MuiCustomTableWithSortandSelect';
import { useSelector } from 'react-redux';
import ErrorMark from "../../../../assets/ErrorMark.jsx"

export default function TableAssessments() {
  const assessments = useSelector((state) => state.dashboard.assessmentsData.assessments);
  const semester = useSelector((state) => state.dashboard.semester);

  const HeaderArr = useMemo(() => [
    { label: 'Subject', key: 'subject', isSortable: true, isSelectable: false },
    { label: 'Time Spent', key: 'total_timespent', isSortable: true, isSelectable: false },
    { label: 'Submission Type', key: 'submission_type', isSortable: false, isSelectable: true },
    { label: 'Internet Speed', key: 'internet_speed', isSortable: true, isSelectable: false },
    { label: 'Mark', key: 'percentage_scored', isSortable: true, isSelectable: false },
  ], []);

  const filteredAssessments = useMemo(() => 
    assessments?.filter(assessment => assessment.semester === semester), 
    [assessments, semester]
  );

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const [sortedData, setSortedData] = useState(filteredAssessments);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const [submissionTypesToShowinStudentTable, setSubmissionTypesToShowinStudentTable] = useState([]); 

  useEffect(() => {
    setCurrentPage(1);
  }, [semester]);

  useEffect(() => {
    setCurrentPage(1);
    let sortableItems = filteredAssessments != undefined ? [...filteredAssessments] : [];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    setSortedData(sortableItems);
  }, [filteredAssessments, sortConfig]);

  const sortHandler = useCallback((order, index) => {
    const key = HeaderArr[index].key;
    setSortConfig({ key, direction: order });
  }, [HeaderArr]);

  const totalPages = Math.ceil(sortedData?.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentTableData = sortedData?.slice(startIndex, startIndex + rowsPerPage);

  const selectHandler = useCallback((event, id) => {
    setCurrentPage(1);
    let updatedSubmissionTypes;
    if (id === 5) {
      updatedSubmissionTypes = [1, 2, 3];
    } else {
      updatedSubmissionTypes = [id];
    }
    setSubmissionTypesToShowinStudentTable(updatedSubmissionTypes);

    const data = filteredAssessments?.filter(value => updatedSubmissionTypes.includes(value.submission_type));
    setSortedData(data);
  }, [filteredAssessments]);

  const viewStudentResult = useCallback((student) => {
    console.log('View Student Result', student);
  }, []);

  const tablePaginationHandler = (event, page) => {
    setCurrentPage(page);
  };

  function handleReload() {
    window.location.reload();
  }

  return (
    <Stack
      direction={'column'}
      gap={'15px'}
      sx={{
        marginTop: '15px',
        borderRadius: '10px',
        borderBottom: (theme) => `1px solid ${theme.palette.grey[100]}`,
        background: (theme) => theme.palette.primary.contrastText,
        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
        marginLeft: '19px',
        paddingBottom: '22.45px',
      }}
    >
      <LabelsTable />
      {assessments != undefined ?
        <MuiCustomTableWithSortandSelect
          HeaderArr={HeaderArr}
          tableData={currentTableData}
          viewStudentResult={viewStudentResult}
          sortHandler={sortHandler}
          selectHandler={selectHandler}
          loading_reportData={false}
          currentPageforTablepaginaton={currentPage}
          tablePaginationHandler={tablePaginationHandler}
          filtered_studentAssessmentList={sortedData}
          submissionTypesToShowinStudentTable={submissionTypesToShowinStudentTable}
          setSubmissionTypesToShowinStudentTable={setSubmissionTypesToShowinStudentTable}
        /> :
        <Box
          height='530px'
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
          paddingBottom={'100px'}
          width={'100%'}
        >
          <ErrorMark />
          <Typography variant='h2' color={(theme) => theme.palette.grey[400]}>Error Loading Assessment</Typography>
          <Link variant='h5' onClick={handleReload} sx={{ cursor: 'pointer' }}>Reload</Link>
        </Box>
      }
    </Stack>
  );
}
