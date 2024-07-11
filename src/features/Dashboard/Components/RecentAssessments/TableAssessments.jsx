import React, { useState, useEffect, useMemo, useCallback } from 'react';
import LabelsTable from './LabelsTable';
import { Stack } from '@mui/material';
import MuiCustomTableWithSortandSelect from '../../../../components/common/MuiCustomTableWithSortandSelect';
import { useSelector } from 'react-redux';

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

  const filteredAssessments = useMemo(() => assessments?.filter(assessment => assessment.semester === semester), [assessments, semester]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const [sortedData, setSortedData] = useState(filteredAssessments);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const [submissionTypesToShowinStudentTable, setSubmissionTypesToShowinStudentTable] = useState([]); // Initial state

  useEffect(() => {
    setCurrentPage(1);
  }, [semester]);

  useEffect(() => {
    let sortableItems = filteredAssessments!=undefined?[...filteredAssessments]:[];
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
    console.log('Select Handler', id);
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
    // Implement viewStudentResult functionality as needed
  }, []);

  const tablePaginationHandler = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Stack
      direction={'column'}
      gap={'15px'}
      sx={{
        marginTop: '15px',
        borderRadius: '10px',
        border: '1px solid #F4F6F8',
        background: '#FFF',
        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
        marginLeft: '19px',
        paddingBottom: '22.45px',
      }}
    >
      <LabelsTable />
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
      />
    </Stack>
  );
}
