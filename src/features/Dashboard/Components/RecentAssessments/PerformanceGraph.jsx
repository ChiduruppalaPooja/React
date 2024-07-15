import React, { useState, useEffect } from "react";
import { Stack, Typography, Skeleton, useTheme } from "@mui/material";
import MuiColumnChart from "../../../../components/common/MuiColumnChart";
import { useSelector } from "react-redux";
import LabelsHeader from "./LabelsRecentAssessments";

export default function PerformanceGraph() {
    const selectedSubject = useSelector((state) => state.dashboard.selectedSubject);
    const recent_assessments = useSelector((state) => state.dashboard.recentAssessmentsData);
    const theme = useTheme();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (recent_assessments && recent_assessments.subjects.length > 0) {
            setLoading(false);
        }
    }, [recent_assessments]);

    if (!recent_assessments || recent_assessments.length === 0) {
        console.log('No recent assessments available.');
        return <div>No recent assessments available.</div>;
    }

    const renderSkeleton = () => (
        <Stack direction="column" sx={{
            padding: '16px 23px 7px 23px',
            borderRadius: '10px',
            border: (theme)=>`1px solid ${theme.palette.grey[100]}`,
            boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
            marginLeft: '19px',
            width: '100%',
            maxWidth: '100%',
        }}>
            <LabelsHeader />
            <Typography
                variant="subtitle3"
                sx={{
                    textAlign: 'start',
                    color: (theme) => theme.palette.grey[600],
                    marginTop: '13px'
                }}>
                Avg. performance
            </Typography>
            <Skeleton variant="rectangular" width="100%" height={267} sx={{ mt: 1 }} />
        </Stack>
    );

    return (
        <Stack direction="column" sx={{
            padding: '16px 23px 7px 23px',
            borderRadius: '10px',
            border: '1px solid #F4F6F8',
            boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
            marginLeft: '19px',
            width: '100%',
            maxWidth: '100%',
        }}>
            <LabelsHeader />
            <Typography
                variant="subtitle3"
                sx={{
                    textAlign: 'start',
                    color: (theme) => theme.palette.grey[600],
                    marginTop: '13px'
                }}>
                Avg. performance
            </Typography>
            {loading ? renderSkeleton() : (
                <Stack>
                    {recent_assessments.subjects.map((subject, index) => {
                        if (selectedSubject === subject.name) {
                            console.log('Rendering MuiColumnChart for selected subject:', subject.name);
                            return (
                                <MuiColumnChart
                                    key={index}
                                    series={[
                                        {
                                            name: subject.name,
                                            data: subject.tests.map((test) => test.percentage),
                                        },
                                    ]}
                                    categories={subject.tests.map((test) => test.name)}
                                    height={'267px'}
                                    width={'100%'} 
                                    xaxisTitle={recent_assessments['x-axis']}
                                    dataLabelsColor={'#0B58F5'} 
                                    primaryBarColor={'#0B58F5'}
                                    secondaryBarColor={'#F44336'} 
                                />
                            );
                        }
                        return null; 
                    })}
                </Stack>
            )}
        </Stack>
    );
}
