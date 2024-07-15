import React from "react";
import { Box } from "@mui/material";
import { pxToRem } from "../../../theme/typography";
import typography from "../../../theme/typography";

export default function Welcome() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '405px',
            alignItems: 'flex-start',
            gap: '8.588px',
            marginTop: '84px',
            marginLeft: '86px',
        }}>
            <Box sx={{
                color: (theme)=>theme.palette.primary.contrastText,
                fontFamily: typography.fontFamily,
                fontSize: pxToRem(57.251),
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '50.094px',
            }}>Welcome to</Box>
            <Box sx={{
                color: (theme)=>theme.palette.primary.contrastText,
                fontFamily: typography.fontFamily,
                fontSize: pxToRem(57.251),
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '50.094px',
            }
            }>student portal</Box>
            <Box sx={{
                color: (theme)=>theme.palette.primary.contrastText,
                fontFamily: typography.fontFamily,
                fontSize: pxToRem(14),
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',

            }}>Login to access your account</Box>
            

        </Box>
    );
}