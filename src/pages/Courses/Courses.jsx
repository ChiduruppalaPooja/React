import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SideBar from "../../components/common/SideBar";
import { dashboardSliceActions } from "../../store/store";
import MainCourse from "../../features/Courses/MainCourse";
import { courseSliceActions } from "../../store/store";
import useFetch from "../CustomHooks/useFetch";
import CoursesSkeleton from "../../components/common/CoursesSkeleton";

export default function Courses() {
    const params = useParams();
    const dispatch = useDispatch();
    // const { data: dashboardData, loading: dashboardLoading, error: dashboardError } = useFetch('https://stagingstudentpython.edwisely.com/reactProject/dashboardData');

    const { data, loading, error } = useFetch(`https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=${params.courseId}`);

    useEffect(() => {
        if (data) {
            dispatch(courseSliceActions.setCoursesData(data));
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
        // if (dashboardData) {
        //     dispatch(dashboardSliceActions.setProfileData(dashboardData));
        // }
    }, [data, dispatch]);

    if (loading) {
        return <CoursesSkeleton />;
    }

    return (
        <Stack direction={"row"} sx={{ background: (theme) => theme.palette.primary.contrastText, marginLeft: '80px' }}>
            {/* <SideBar /> */}
            <MainCourse />
        </Stack>
    );
}
