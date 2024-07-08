import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MuiCustomChipCount from "../../../components/common/MuiCustomChipCount";

const chipColors = ['#E7EEFE', '#FFF0D8', '#EDFAEE', '#FFF0D8']
const chipTextColor = ['#0B58F5', '#D89932', '#4ECD56', '#D89932']

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