import { Stack, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import BackIcon from "../../../assets/BackIcon";
import CourseTitle from "./CourseTitle";
import CoursePercent from "./CoursePercent";
import CourseDescription from "./CourseDescription";
import { useEffect, useRef } from "react";

export default function CourseDetail() {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const handleBackClick = () => {
        navigate(-1); 
    };
   

    return (
        <Stack direction={"row"} gap={'29.5px'} ref={scrollRef}>
            <Box
                sx={{
                    paddingLeft: '33.5px',
                    marginTop: '40px',
                    cursor: 'pointer' 
                }}
                onClick={handleBackClick}
            >
                <BackIcon />
            </Box>
            <Stack  direction={'column'} alignItems={'flex-start'} sx={{ marginTop: '34.29px' }}>
                <CourseTitle />
                <CoursePercent />
                <CourseDescription />
            </Stack>
        </Stack>
    );
}
