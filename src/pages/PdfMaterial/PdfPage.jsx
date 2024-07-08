import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import SideBar from "../../components/common/SideBar";
import PdfPage from "../../features/PdfPages/PdfPage";
import { useLocation } from "react-router-dom";

export default function Pdf() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pdfTitle = params.get('name');
  const pdfUrl = params.get('url');
  const initialPageNumber = Number(params.get('pageNumber')) || 1; 

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const [scale, setScale] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    setPageNumber(initialPageNumber);
  }, [initialPageNumber]);

  return (
    <Stack direction={"row"} sx={{ background: (theme) => theme.palette.primary.contrastText }}>
      <SideBar />
      <PdfPage
        pdfTitle={pdfTitle}
        pdfUrl={pdfUrl}
        numPages={numPages}
        pageNumber={pageNumber}
        scale={scale}
        setScale={setScale}
        rotationAngle={rotationAngle}
        setRotationAngle={setRotationAngle}
        onDocumentLoadSuccess={({ numPages }) => setNumPages(numPages)}
      />
    </Stack>
  );
}
