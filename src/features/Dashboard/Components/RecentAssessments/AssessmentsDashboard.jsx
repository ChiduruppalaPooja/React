import React from "react";
import { Stack, Typography } from "@mui/material";
import RecentAssessments from "./RecentAssessments";
import MuiColumnChart from "../../../../components/common/MuiColumnChart";
import { useSelector } from "react-redux";
import Calendar from "../Calender/Calender";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import User from "../User/User";

export default function AssessmentsDashboard() {
    const selectedSubject = useSelector((state) => state.dashboard.selectedSubject);
    const tests = useSelector((state) => state.dashboard.subjects[selectedSubject]?.tests);
    const data = useSelector((state) => state.dashboard.recentAssessmentsData);
        const xaxisTitle = data['x-axis'];
    const yaxisTitle = data['y-axis'];

    const categories = [];
    const series = [];
    const temp=[];

    if (tests) {
        tests.forEach((item) => {
            categories.push(item.name);
            temp.push(item.percentage);
        });
    }


    series.push(
        {
            data : temp
        }
    )


    console.log("temp: ", temp);
    console.log("Series: ", series);

    console.log("Categories: ", categories);
    console.log("x-axis Title: ", xaxisTitle);
    console.log("y-axis Title: ", yaxisTitle);

    return (
        <Stack direction="row" justifyContent="space-between" className="midblock">
            <Stack direction="column" className="midblockLeft">
                <Stack direction="column" sx={{
                    padding: '16px 23px 7px 23px',
                    borderRadius: '10px',
                    border: '1px solid #F4F6F8',
                    boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)'
                }}>
                    <RecentAssessments />
                    <Typography
                        variant="subtitle3"
                        sx={{
                            textAlign: 'start',
                            color: (theme) => theme.palette.grey[600],
                        }}>
                        Avg. performance
                    </Typography>
                    {console.log('before comp',series)}
                    {/* <MuiColumnChart
                        series={series}
                        categories={categories}
                        primaryBarColor={(theme) => theme.palette.primary.main}
                        secondarybarColor={(theme) => theme.palette.error.main}
                        xaxisTitle={xaxisTitle}
                        yaxisTitle={yaxisTitle}
                    /> */}
                </Stack>
            </Stack>
            <Stack className="midblockRight" direction="column" justifyContent={"space-between"} gap={'30px'}>

                        <User />
                        <Calendar />
                        <LeaderBoard displayLimit={6}/>
    
            </Stack>
        </Stack>
    );
}
