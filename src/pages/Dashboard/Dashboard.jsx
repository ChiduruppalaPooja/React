import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import MainDashboard from "../../features/Dashboard/Components/MainDashboard";
import SideBar from "../../components/common/SideBar";
import { useDispatch } from "react-redux";
import { dashboardSliceActions } from "../../store/store";
import useFetch from "../CustomHooks/useFetch";

export default function Dashboard() {
    const dispatch = useDispatch();
    const { data: dashboardData, loading: dashboardLoading, error: dashboardError } = useFetch('https://stagingstudentpython.edwisely.com/reactProject/dashboardData');
    const { data: assessmentsData, loading: assessmentsLoading, error: assessmentsError } = useFetch('https://stagingstudentpython.edwisely.com/reactProject/assessments');
    console.log('data from usefetch', assessmentsData);
    console.log('----------------');
                    console.log('Fetched assessments data', assessmentsData);
                    dispatch(dashboardSliceActions.setAssessmentsData(assessmentsData));
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (dashboardData) {
                    dispatch(dashboardSliceActions.setDashBoardData(dashboardData));
                    console.log('Fetched dashboard data', dashboardData);
                }
                if (assessmentsData) {
                    console.log('----------------');
                    console.log('Fetched assessments data', assessmentsData);
                    dispatch(dashboardSliceActions.setAssessmentsData(assessmentsData));
                    
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error if needed
            }
        };
    
        if (dashboardData || assessmentsData) {
            fetchData();
        }
    }, [dashboardData, assessmentsData, dispatch]);

    if (dashboardLoading || assessmentsLoading) return <div>Loading...</div>;
    if (dashboardError || assessmentsError) return <div>Error: {dashboardError || assessmentsError}</div>;

    return (
        <Stack direction={"row"} sx={{ background: (theme) => theme.palette.primary.contrastText }}>
            <SideBar />
            <MainDashboard />
        </Stack>
    );
}
