import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";
export default function Courses(){
    const coursesData = useSelector((state)=>state.dashboard.coursesData)
    return(
        <Stack direction={"column"} gap={'15px'}>
            <Typography variant="h5" textAlign={"left"}>Your Courses</Typography>
            <Stack direction={'row'}  gap='22px'>
            {coursesData.map((course, index) => (
                        <CourseCard
                            key={index}
                            name={course.name}
                            tag={course.tag}
                            image={course.image}
                            id={course.id}
                            index={index}
                        />
                    ))}
            </Stack>
        </Stack>
    );
}