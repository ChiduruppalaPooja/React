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
  
  return (
    <Stack direction={"row"} sx={{ background: (theme) => theme.palette.primary.contrastText }}>
      {/* <SideBar /> */}
      <PdfPage pdfTitle={pdfTitle} pdfUrl={pdfUrl}
        
      />
      
    </Stack>
  );
}
