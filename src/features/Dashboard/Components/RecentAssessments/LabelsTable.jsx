import { Stack, Typography } from "@mui/material";
import React from "react";
import LessThanIcon from "../../../../components/common/LessThanIcon";
import GreaterThanIcon from "../../../../components/common/GreaterThanIcon";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dashboardSliceActions } from "../../../../store/store";

export default function LabelsTable(){
    const assessmentsData = useSelector((state)=> state.dashboard.assessmentsData);
    const semester = useSelector((state)=> state.dashboard.semester);
    const dispatch = useDispatch()
    const changeSemester = (direction) => {
        if (direction === 'left' && semester !== 1) {
            dispatch(dashboardSliceActions.setSemester(semester - 1))
        }
        else if (direction === 'right' && semester !== 3) {
            dispatch(dashboardSliceActions.setSemester(semester + 1))
        }
    }
    return(
        <Stack direction={"row"} justifyContent={'space-between'} alignItems={'center'} sx={{padding: '14px 13px 0 16px'}}>
            <Typography variant="h5"> Assessments</Typography>
            <Stack direction={"row"}>
            <LessThanIcon onClick={() => changeSemester('left')}/>
            <Typography variant="caption2" sx={{display: 'flex', alignItems: 'center' ,color: (theme)=>theme.palette.grey[800]}}>Semester 0{semester}</Typography>
            <GreaterThanIcon onClick={() => changeSemester('right')}/>
            </Stack>

        </Stack>
    );
}