import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../components/common/SideBar";

export default function Courses() {
    const { courseId } = useParams();
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=${courseId}&username=student@edwisely.com&password`);
                const data = await response.json();
                setCourseData(data);
            } catch (error) {
                console.error("Error fetching course data:", error);
            }
        };

        fetchData();
    }, [courseId]);

   

    return (
        <Stack direction={"row"} sx={{background: (theme)=> theme.palette.primary.contrastText }}>
        <SideBar />
       
        </Stack>
    );
}
