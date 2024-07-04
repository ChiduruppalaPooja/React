import React from "react";
import { Box, Typography } from "@mui/material";

export default function Attempted({ indicator, value }) {
    return (
        <>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={'5px'}>
                <Box sx={{ width: '8px', height: '8px' }}><img src={indicator} alt="blueEllipse" /></Box>
                <Typography variant="subtitle2" sx={{ color: (theme) => theme.palette.grey[900] }}>{value}</Typography>
            </Box>
        </>
    );
}