import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import MainDashboard from "../../features/Dashboard/Components/MainDashboard";
import SideBar from "../../components/common/SideBar";
import { useDispatch } from "react-redux";
import { dashboardSliceActions } from "../../store/store";
import useFetch from "../CustomHooks/useFetch";
import SkeletonDashboard from "../../components/common/SkeletonDashboard";

export default function Dashboard() {
    const dispatch = useDispatch();
    const { data: dashboardData, loading: dashboardLoading, error: dashboardError } = useFetch('https://stagingstudentpython.edwisely.com/reactProject/dashboardData');
    const { data: assessmentsData, loading: assessmentsLoading, error: assessmentsError } = useFetch('https://stagingstudentpython.edwisely.com/reactProject/assessments');

    const fetchAssessmentsData = async () => {
        try {
            const response = await fetch('https://stagingstudentpython.edwisely.com/reactProject/assessments');
            const data = await response.json();
            dispatch(dashboardSliceActions.setAssessmentsData(data));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (dashboardData) {
                    dispatch(dashboardSliceActions.setDashBoardData(dashboardData));
                    localStorage.setItem("dashboardData", JSON.stringify(dashboardData));   
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                }
                if (assessmentsData) {
                    dispatch(dashboardSliceActions.setAssessmentsData(assessmentsData));
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (dashboardData || assessmentsData) {
            fetchData();
        }
    }, [dashboardData, assessmentsData, dispatch]);

    if (dashboardLoading || assessmentsLoading) {
        return (
            <SkeletonDashboard />
        );
    }

    return (
        <Stack direction={"row"} sx={{ width: '100%', background: (theme) => theme.palette.primary.contrastText }}>
            {/* <SideBar /> */}
            <MainDashboard fetchAssessmentsData={fetchAssessmentsData} />
        </Stack>
    );
}
