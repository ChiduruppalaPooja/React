import { Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "@mui/material/Slider";
import { useSelector } from "react-redux";
export default function CoursePercent() {
    const courseCompletionPercentage = useSelector((state) => state.courses.courseCompletionPercentage);

    return (
        <Stack direction={'row'} gap={'12px'} alignItems={'center'} justifyContent={'space-between'} >

            <Slider
                size="medium"
                value={courseCompletionPercentage}
                valueLabelDisplay="auto"
                max={100}
                min={0}
                components={{
                    Thumb: () => null,
                    ValueLabel: () => null,
                }}
                sx={{
                    color: (theme)=>theme.palette.primary.main,
                    width: '300px',
                    cursor: 'default',
                    "& .MuiSlider-thumb": {
                        display: 'none',
                    },
                }}
            />
            <Typography variant="subtitle2" sx={{ color: (theme)=>theme.palette.primary.main}}>Avg. {courseCompletionPercentage}%</Typography>
        </Stack>
    );
}