import { Stack, Typography, Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MuiCustomChipCount from "../../../components/common/MuiCustomChipCount";

const chipColors = [(theme) => theme.palette.primary[100], 
    (theme) => theme.palette.warning[200],
    (theme) => theme.palette.success[100],
    (theme) => theme.palette.warning[200]];
    const chipTextColor = [(theme) => theme.palette.primary.main
    , (theme) => theme.palette.warning[800],
    (theme) => theme.palette.success.main, 
    (theme) => theme.palette.warning[800]];

export default function CourseTitle(){
    const courseName = useSelector((state)=> state.courses.courseName);
    const courseId = useSelector((state)=> state.courses.id);
    const courseTag = useSelector((state)=> state.courses.courseTag);

  
        return(
        <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
            <Typography variant="h2">{courseName}</Typography>
            <MuiCustomChipCount
                    width={'max-content'}
                    height={'20px'}
                    label={courseTag}
                    fontSize={'14px'}
                    background={chipColors[courseId - 1]}
                    color={chipTextColor[courseId - 1]}
                />
        </Stack>
    );

}