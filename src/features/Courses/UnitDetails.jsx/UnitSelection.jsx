import { Stack } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

export default function UnitSelection({ setSelectedTopics }) {
    return (
        <Stack direction={'column'} gap={'25px'} sx={{ marginTop: '26px', marginLeft: '56px' }}>
            <NavBar setSelectedTopics={setSelectedTopics} />
        </Stack>
    );
}
