import React from "react";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SideBar from "../../components/common/SideBar";
import MainCourse from "../../features/Courses/MainCourse";
import { courseSliceActions } from "../../store/store";
import useFetch from "../CustomHooks/useFetch";
import { useEffect } from "react";
export default function Courses() {
    const params = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useFetch(`https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=${params.courseId}`);

    useEffect(() => {
        if (data) {
            dispatch(courseSliceActions.setCoursesData(data));
        }
    }, [data, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Stack direction={"row"} sx={{ background: (theme) => theme.palette.primary.contrastText, marginLeft: '80px' }}>
            {/* <SideBar /> */}
            <MainCourse />
        </Stack>
    );
}
