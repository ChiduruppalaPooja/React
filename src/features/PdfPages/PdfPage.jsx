import React, { useState } from "react";
import { Stack, Box, Typography, Button, IconButton, Grid } from "@mui/material";
import TopNavigation from "../../components/common/TopNavigation";
import ArrowLeftIcon from "../../assets/arrowLeft";
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import ZoomOut from "../../assets/ZoomOut";
import ZoomIn from "../../assets/ZoomIn";
import RotateLeft from "../../assets/RotateLeft";
import PresentationIcon from "../../assets/PresentationIcon";
import { useEffect } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function PdfPage({ pdfTitle, pdfUrl }) {
    const navigate = useNavigate();
    const [pageNumbers, setPageNumbers] = useState([]);

    
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
    useEffect(() => {
        if (numPages) {
            const pages = Array.from({ length: numPages }, (_, index) => index + 1);
            setPageNumbers(pages);
        }
    }, [numPages]);

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

    const present = () => {
        setRotate((rotate + 90) % 360);
    };
    const handleThumbnailClick = (page) => {
        setPageNumber(page);
    };
    return (
        <Stack direction="column" sx={{ background: (theme) => theme.palette.primary.contrastText, width: '100%', marginLeft: '80px' }} >
            {/* <TopNavigation icon={' '} /> */}
            <Box sx={{ background: (theme) => theme.palette.grey[200], height: '1px' }}></Box>
            <Stack direction={'row'} alignItems={'center'} gap={'99px'} sx={{ padding: '16px', boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)'
 }}>
                <Stack direction={'row'} gap={'32px'} >
                    <Box
                        sx={{ cursor: 'pointer' }}
                        onClick={handleBackClick}
                    >
                        <ArrowLeftIcon />
                    </Box>
                    <Typography variant="body5">{pdfTitle}</Typography>
                </Stack>
                <Stack direction={'row'} gap={'8px'} sx={{ maxHeight: '24px'}}>
                    <Stack direction={'row'} gap={'8px'} alignItems={'center'} className="pagenumber" sx={{ padding: '0 24px 0 24px' }}>
                        {/* <Button onClick={handlePrevPage} disabled={pageNumber <= 1}>Previous</Button> */}
                        <Typography variant="body2" sx={{ width: '20px', background: (theme)=>theme.palette.grey[200], color: (theme)=>theme.palette.grey[800]}}>{pageNumber}</Typography>
                        <Typography variant="caption2" sx={{width: '20px', color: (theme)=>theme.palette.grey[800]}}>/</Typography>
                        <Typography variant="caption2" sx={{ width: '20px', color: (theme)=>theme.palette.grey[800]}}>{numPages}</Typography>
                        {/* <Button onClick={handleNextPage} disabled={pageNumber >= numPages}>Next</Button> */}
                    </Stack>
                    <Box className='divider' sx={{width: '1px', background: '#BDBDC7'}}></Box>
                    <Stack direction={'row'} gap={'16px'} className="zoom" sx={{ padding: '0 24px 0 24px' }}>
                        <IconButton onClick={handleZoomOut} >
                            <ZoomOut  />
                        </IconButton>
                        <Typography variant="body2" sx={{ background: (theme)=>theme.palette.grey[200], color: (theme)=>theme.palette.grey[800], padding: '8px 7px', display: 'flex', alignItems: 'center' }}>{Math.round(scale * 100)}%</Typography>
                        <IconButton onClick={handleZoomIn} >
                            <ZoomIn />
                        </IconButton>
                    </Stack>
                    <Box className='divider' sx={{width: '1px', background: '#BDBDC7'}}></Box>
                    <Stack direction={'row'} gap={'16px'} className="rotate" sx={{ padding: '0 24px 0 24px' }}>
                    <IconButton onClick={present}>
                            <PresentationIcon />
                        </IconButton>
                        <IconButton onClick={handleRotateLeft}>
                            <RotateLeft />
                        </IconButton>
                        
                    </Stack>
                </Stack>
            </Stack>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={10} display="flex" justifyContent="center" alignItems="center" sx={{marginTop: '21px'}}>
                    {pdfUrl && (
                        <Document
                            file={pdfUrl}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={(error) => console.error('Error loading document:', error)}
                        >
                            <Page
                                key={`page-${pageNumber}`}
                                pageNumber={pageNumber}
                                scale={scale}
                                rotate={rotate}
                                width={415.511}
                                height={588}
                                className="pdf-page"
                                renderTextLayer={false} // Disable text layer for better performance
                                renderAnnotationLayer={false} // Disable annotation layer
                                customTextRenderer={({ str }) => (
                                    <div style={{ fontFamily: 'Arial', fontSize: '12px' }}>{str}</div>
                                )}
                            />
                        </Document>
                    )}
                </Grid>
                <Grid item xs={2} sx={{ maxHeight: 'calc(100vh - 128px)',  overflowY: 'auto', 
       
        '&::-webkit-scrollbar': { 
            display: 'none'  
        } }}>
                    {pageNumbers.map((page, index) => (
                        <Stack direction={"column"} gap={'9px'} justifyContent={"center"} alignItems={'center'}>
                        <Box key={`page-thumbnail-${index}`} onClick={() => handleThumbnailClick(page)}  sx={{ 
                                 
                                cursor: 'pointer', 
                                border: page === pageNumber ? '4px solid #9EBDFA' : 'none', 
                                '&:hover': {
                                    border: '4px solid #9EBDFA'
                                } 
                            }}>
                            <Document
                                file={pdfUrl}
                                
                            >
                                <Page
                                    pageNumber={page}
                                    key={`page-${pageNumber}`}
                               
                                width={115}
                                height={117}
                                className="pdf-page"
                                renderTextLayer={false} 
                                renderAnnotationLayer={false} 
                                customTextRenderer={({ str }) => (
                                    <div style={{ fontFamily: 'Arial', fontSize: '12px' }}>{str}</div>
                                )}
                                />
                            </Document>
                            
                        </Box>
                        <Typography variant="caption1" sx={{ marginTop: '4px', textAlign: 'center', color: (theme)=>theme.palette.common.black }}>
                        {page}
                    </Typography>
                    </Stack>
                    ))}
                </Grid>
            </Grid>


        </Stack>
    );
}
