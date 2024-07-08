import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDown from "../../../assets/arrowDown";
import Materials from "./Materials"; 
import Divider from "../../../assets/Divider";
export default function SelectTopic({ topicName, materials }) {
    const [showMaterials, setShowMaterials] = useState(false);

    const handleToggle = () => {
        setShowMaterials(!showMaterials);
    };

    return (
        <Stack direction={"column"} gap={'10px'} sx={{ marginLeft: '56px', width: '506px', textAlign: 'left' }}>
            <Stack direction={"row"} gap={'10px'} alignItems={"center"} sx={{ cursor: 'pointer' }} onClick={handleToggle}>
                <Typography variant="subtitle4" sx={{ color: (theme) => theme.palette.grey[400] }}>{topicName}</Typography>
                <Box>
                <ArrowDown />
                </Box>
            </Stack>
            {showMaterials && <Materials materials={materials} />}
            <Divider />
        </Stack>
    );
}
