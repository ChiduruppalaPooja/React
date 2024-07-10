import React, { useState } from "react";
import { Stack, Box, Typography, Button, IconButton } from "@mui/material";
import TopNavigation from "../../components/common/TopNavigation";
import ArrowLeftIcon from "../../assets/arrowLeft";
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function PdfPage({ pdfTitle, pdfUrl }) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const handlePrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const handleZoomIn = () => {
        setScale(scale + 0.25);
    };

    const handleZoomOut = () => {
        if (scale > 0.5) {
            setScale(scale - 0.25);
        }
    };

    const handleRotateLeft = () => {
        setRotate((rotate - 90) % 360);
    };

    const handleRotateRight = () => {
        setRotate((rotate + 90) % 360);
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
                <Stack direction={'row'} gap={'8px'}>
                    <Stack direction={'row'} gap={'8px'} className="pagenumber" sx={{ padding: '0 24px 0 24px' }}>
                        <Button onClick={handlePrevPage} disabled={pageNumber <= 1}>Previous</Button>
                        <Typography>{pageNumber} / {numPages}</Typography>
                        <Button onClick={handleNextPage} disabled={pageNumber >= numPages}>Next</Button>
                    </Stack>
                    <Box className='divider'></Box>
                    <Stack direction={'row'} gap={'16px'} className="zoom" sx={{ padding: '0 24px 0 24px' }}>
                        <IconButton onClick={handleZoomOut}>
                            <ZoomOutIcon />
                        </IconButton>
                        <Typography>{Math.round(scale * 100)}%</Typography>
                        <IconButton onClick={handleZoomIn}>
                            <ZoomInIcon />
                        </IconButton>
                    </Stack>
                    <Box className='divider'></Box>
                    <Stack direction={'row'} gap={'16px'} className="rotate" sx={{ padding: '0 24px 0 24px' }}>
                        <IconButton onClick={handleRotateLeft}>
                            <RotateLeftIcon />
                        </IconButton>
                        <IconButton onClick={handleRotateRight}>
                            <RotateRightIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
            <Box marginLeft={'100px'} sx={{ position: 'relative' }}>
                {pdfUrl && (
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={(error) => console.error('Error loading document:', error)}
                    >
                        <Page key={`page-${pageNumber}`} pageNumber={pageNumber} scale={scale} rotate={rotate} />
                    </Document>
                )}
            </Box>

        </Stack>
    );
}
