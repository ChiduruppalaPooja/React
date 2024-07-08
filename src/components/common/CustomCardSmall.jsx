import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FileIcon from "../../assets/FileIcon";
import PresentationIcon from "../../assets/PresentationIcon";
import RightArrowIcon from "../../assets/rightArrow";
import { useNavigate } from "react-router-dom";
const icons = [<FileIcon />, <PresentationIcon />, <PresentationIcon />];

export default function CustomCardSmall({ title, index, url }) {
    const navigate = useNavigate();

    const handleMaterialClick = (title, url) => {
        navigate(`/pdf?name=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
    };
    return (
        <Stack
            direction="row"
            gap="15px"

            justifyContent="space-between"
            alignItems="center"
            sx={{
                borderRadius: '10px', cursor: 'pointer', padding: '10px 27px 10px 10px', border: '1px solid #F4F6F8', boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)', width: '285px'
            }} onClick={() => handleMaterialClick(title, url)} 
        >
            <Box sx={{ padding: '15px', background: (theme) => theme.palette.grey[200], borderRadius: '5px' }}>
                {icons[index]}
            </Box>
            <Typography variant="subtitle2" >{title}</Typography>
            <RightArrowIcon color="#454F5B" />
        </Stack>
    );
}
