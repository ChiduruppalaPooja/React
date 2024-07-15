import React from "react";
import { Box, Typography } from "@mui/material";

export default function Attempted({ indicator: IndicatorComponent, value }) {
    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap={'5px'}>
            <Box sx={{ width: '8px', display: 'flex', alignItems: 'center' }}>
                <IndicatorComponent /> 
            </Box>
            <Typography variant="subtitle2" sx={{ color: (theme) => theme.palette.grey[900] }}>
                {value}
            </Typography>
        </Box>
    );
}
