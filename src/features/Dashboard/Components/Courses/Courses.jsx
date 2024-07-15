import { Stack, Typography, Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import DashboardCourseSkeleton from "../../../../components/common/DashboardCourseSkeleton";

export default function Courses() {
    const [loading, setLoading] = useState(true);
    const coursesData = useSelector((state) => state.dashboard.coursesData);

    useEffect(() => {
        if (coursesData ) {
            setLoading(false);
        }
    }, [coursesData]);

   

    return (
        <Stack direction={"column"} gap={'15px'} sx={{ marginLeft: '20px', paddingBottom: '55px', marginTop: '20px' }}>
            <Typography variant="h5" textAlign={"left"}>Your Courses</Typography>
            <Stack direction={'row'} gap='22px'>
                {!loading ? ( coursesData?.map((course, index) => (
                    <CourseCard
                        key={index}
                        name={course.name}
                        tag={course.tag}
                        image={course.image}
                        id={course.id}
                        index={index}
                    />
                ))): <DashboardCourseSkeleton />}
            </Stack>
        </Stack>
    );
}
