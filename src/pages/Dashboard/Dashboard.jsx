import React from "react";
import {  Box, Stack } from "@mui/material";
import MainDashboard from "../../features/Dashboard/Components/MainDashboard";
import SideBar from "../../components/common/SideBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { dashboardSliceActions } from "../../store/store";


export default function Dashboard() {
    const dispatch = useDispatch()
    useEffect(() => {

        fetch('https://stagingstudentpython.edwisely.com/reactProject/dashboardData')
            .then((response) => response.json())
            .then((resData) => {
                dispatch(dashboardSliceActions.setDashBoardData(resData))
            })

    }, [])
    return (
        <Stack direction={"row"} sx={{background: (theme)=> theme.palette.primary.contrastText }}>
        <SideBar />
        <MainDashboard />
        </Stack>        
    );
}