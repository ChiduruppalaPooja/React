import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import CourseDetail from "./CourseDetails/CourseDetail";
import { useSelector } from "react-redux";
import ContinueReading from "./ContinueReading/ContinueReading";
import UnitSelection from "./UnitDetails/UnitSelection";
import Topics from "./Topics/Topics";

export default function MainCourse() {
    const name = useSelector((state) => state.dashboard.name);
    const unitsData = useSelector((state) => state.courses.unitsData);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (unitsData.length > 0) {
            setSelectedTopics(unitsData[0].topics);
        }
    }, [unitsData]);

    const filteredTopics = selectedTopics.filter(topic => 
        topic.topic_name.toLowerCase().includes(searchText.toLowerCase()) ||
        topic.materials.some(material => material.name.toLowerCase().includes(searchText.toLowerCase()))
    );
    

    return (
        <Stack direction="column" sx={{ background: (theme) => theme.palette.primary.contrastText}}>
            <CourseDetail />
            <ContinueReading />
            <UnitSelection setSelectedTopics={setSelectedTopics} setSearchText={setSearchText} />
            <Topics topics={filteredTopics} searchText={searchText}/>
        </Stack>
    );
}
