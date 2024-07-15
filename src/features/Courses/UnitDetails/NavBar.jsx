import { Stack, InputBase } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../../../assets/searchIcon";
import Navigation from "../../../components/common/Navigation";

export default function NavBar({ setSelectedTopics, setSearchText }) {
    const unitsData = useSelector((state) => state.courses.unitsData);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (unitsData.length > 0) {
            setSelectedTopics(unitsData[0].topics);
        }
    }, [unitsData, setSelectedTopics]);

    const handleNavigationClick = (index, topics) => {
        setSelectedIndex(index);
        setSelectedTopics(topics);
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <Stack direction={'row'} gap={'30px'}>
            <Stack direction={'row'} gap={'35px'} alignItems={'center'}>
                {unitsData.map((unit, index) => (
                    <Navigation 
                        key={index}
                        name={unit.unit_name}
                        topics={unit.topics}
                        selected={index === selectedIndex}
                        onClick={() => handleNavigationClick(index, unit.topics)}
                    />
                ))}
            </Stack>
            <Stack direction={"row"} gap={'11.38px'} sx={{ width: '144px', background: (theme) => theme.palette.grey[100], border: (theme)=>`1px solid ${theme.palette.grey[100]}`, borderRadius: '6.64px', padding: ' 5px 7px' }} justifyContent={"center"} alignItems={'center'}>
                <SearchIcon />
                <InputBase
                    placeholder="Search topics"
                    onChange={handleSearchChange}
                    sx={{ ml: 1, flex: 1 }}
                />
            </Stack>
        </Stack>
    );
}
