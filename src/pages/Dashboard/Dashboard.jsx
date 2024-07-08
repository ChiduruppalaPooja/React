import React from "react";
import { Box, Stack } from "@mui/material";
import MainDashboard from "../../features/Dashboard/Components/MainDashboard";
import SideBar from "../../components/common/SideBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { dashboardSliceActions } from "../../store/store";
import useFetch from "../CustomHooks/useFetch";

export default function Dashboard() {
    const dispatch = useDispatch();
    const { data, loading, error } = useFetch('https://stagingstudentpython.edwisely.com/reactProject/dashboardData');

    useEffect(() => {
        if (data) {
            dispatch(dashboardSliceActions.setDashBoardData(data));
        }
    }, [data, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Stack direction={"row"} sx={{ background: (theme) => theme.palette.primary.contrastText }}>
            <SideBar />
            <MainDashboard />
        </Stack>
    );
}
