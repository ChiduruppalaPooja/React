import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import TopNavigation from "../../components/common/TopNavigation";
import CourseDetail from "./CourseDetails/CourseDetail";
import { useSelector } from "react-redux";
import ContinueReading from "./ContinueReading/ContinueReading";
import UnitSelection from "./UnitDetails.jsx/UnitSelection";
import Topics from "./Topics/Topics";

export default function MainCourse() {
    const name = useSelector((state) => state.dashboard.name);
    const unitsData = useSelector((state) => state.courses.unitsData);
    const [selectedTopics, setSelectedTopics] = useState([]);

    useEffect(() => {
        if (unitsData.length > 0) {
            setSelectedTopics(unitsData[0].topics);
        }
    }, [unitsData]);

    return (
        <Stack direction="column" sx={{ background: (theme) => theme.palette.primary.contrastText }}>
            <TopNavigation icon={''}/>
            <Box sx={{ background: (theme) => theme.palette.grey[200], height: '1px' }}></Box>
            <CourseDetail />
            <ContinueReading />
            <UnitSelection setSelectedTopics={setSelectedTopics} />
            <Topics topics={selectedTopics} />
        </Stack>
    );
}
