import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import typography from "../../../theme/typography";
export default function CourseDescription() {
    const courseDescription = useSelector((state) => state.courses.courseDescription);
    let listArray = courseDescription?.split("\n") || [];    return(
        <Stack direction={'column'} alignItems={'flex-start'} gap={'10px'} sx={{marginTop: '23px'}}>
            <Typography variant="subtitle5">What you will learn</Typography>
            <Box
                    component={'ul'}
                    sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            textIndent: '0px',
                            justifyContent: 'flex-start',
                            maxWidth: '1095px',
                            
                        }
                    }>
                    {listArray?.map((item, index) => <li key={index}
                        style={{
                            listStylePosition: 'outside',
                            textAlign: 'start',
                        }}><Typography variant="subtitle2" sx={{color: (theme)=>theme.palette.common.black}}>{item}</Typography></li>)}
                </Box>
        </Stack>
    );
}