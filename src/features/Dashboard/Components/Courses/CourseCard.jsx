import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MuiCustomChipCount from "../../../../components/common/MuiCustomChipCount";
import { useEffect } from "react";

export default function CourseCard({ name, tag, image, id, index }) {
    const navigate = useNavigate();
    const chipColors = [(theme) => theme.palette.primary[100], 
    (theme) => theme.palette.warning[200],
    (theme) => theme.palette.success[100],
    (theme) => theme.palette.warning[200]];
    const chipTextColor = [(theme) => theme.palette.primary.main
    , (theme) => theme.palette.warning[800],
    (theme) => theme.palette.success.main, 
    (theme) => theme.palette.warning[800]];

    const handleCourseClick = () => {
        navigate(`/courses/${id}`);
    };
    


    return (
        <Stack
            direction={"column"}
            gap={'14px'}
            onClick={handleCourseClick}
            sx={{
                width: '244px',
                minHeight: '267px',
                boxShadow: '0px -1px 0px 0px #E9EAF0 inset',
                padding: '0 0 15px 0',
                cursor: 'pointer',
                borderRadius: '10px'
            }}
        >
            <Box sx={{ overflow: 'hidden', height: '183px', borderRadius: '10px 10px 0px 0px' }}>
                <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Stack direction={'column'} gap={'10px'}>
                <MuiCustomChipCount
                    width={'max-content'}
                    height={'20px'}
                    label={tag}
                    fontSize={'12px'}
                    background={chipColors[index]}
                    color={chipTextColor[index]}
                />
                <Typography variant="subtitle3" sx={{ textAlign: 'left' }}>{name}</Typography>
            </Stack>
        </Stack>
    );
}
