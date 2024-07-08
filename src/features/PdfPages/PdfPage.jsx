import React, { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import TopNavigation from "../../components/common/TopNavigation";
import ArrowLeftIcon from "../../assets/arrowLeft";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from 'react-pdf';
import { useNavigate } from "react-router";


function PdfPage({ pdfTitle, pdfUrl }) {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [scale, setScale] = useState(1.0);
    const [rotationAngle, setRotationAngle] = useState(0);
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleZoomOut = () => {
        setScale((prevScale) => Math.max(0.5, prevScale - 0.1));
    };

    const handleZoomIn = () => {
        setScale((prevScale) => Math.min(2, prevScale + 0.1));
    };

    const handleRotation = () => {
        setRotationAngle(prevRotation => (prevRotation + 90) % 360);
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <Stack direction="column" sx={{ background: (theme) => theme.palette.primary.contrastText }}>
            <TopNavigation icon={' '} />
            <Box sx={{ background: (theme) => theme.palette.grey[200], height: '1px' }}></Box>
            <Stack direction={'row'} gap={'99px'} sx={{ padding: '16px' }}>
                <Stack direction={'row'} gap={'32px'}>
                    <Box
                        sx={{ cursor: 'pointer' }}
                        onClick={handleBackClick}
                    >
                        <ArrowLeftIcon />
                    </Box>
                    <Typography variant="body5">{pdfTitle}</Typography>
                </Stack>
            </Stack>
            <Box marginLeft={'100px'} sx={{ marginTop: '1.31rem' }}>
                
            </Box>
        </Stack>
    );
}

export default PdfPage;
