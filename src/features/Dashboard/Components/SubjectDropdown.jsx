import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";

export default function SubjectDropdown(){
    return(
        <>
        <Typography variant="body2" sx={{color:(theme)=>theme.palette.grey[400] }}>Subjects</Typography>
        <KeyboardArrowDownIcon
                        sx={{
                            cursor: 'pointer',
                            color: (theme) => theme.palette.grey[400],
                        }} />
        </>
    );
}