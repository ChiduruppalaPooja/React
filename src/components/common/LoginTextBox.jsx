import React, { useState } from "react";
import typography, { pxToRem } from "../../theme/typography";
import { Box, InputBase, Stack } from "@mui/material";


export default function LoginTextBox({ value, onChange, passwordImg, visibleImg,errorMessage, loginClicked }) {
    const [passWordVisible, setPasswordVisibility] = useState(true);
    function handlePasswordVisibility() {
        setPasswordVisibility(!passWordVisible);
    }

    return (
        <Box
            sx={{
                display: "flex",
                width: pxToRem(381),
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
            }}
        >
            <Stack 
                direction='row' justifyContent='space-between' 
            >
               
                    <InputBase
                        value={value}
                        placeholder={passwordImg? 'Password': 'Username'}
                        type={passwordImg && passWordVisible ? 'password' : 'text'}
                        onChange={onChange}
                       
                        autoFocus
                        sx={{
                            color: (theme)=>theme.palette.grey[500],
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            width: '100%',
                            minWidth: '357px',
                            padding: 0,
                            margin: 0,
                            "& .MuiCheckbox-root": {
                padding: 0
            },
            "& .MuiInputBase-input": {
                padding: 0,
                
               
            }}}
                     
                    />
               
                {passwordImg && (
                    <Box
                        sx={{
                            width: pxToRem(24),
                            height: pxToRem(24),
                            cursor: 'pointer'
                        }}
                    >
         <img 
                            src={passWordVisible ? passwordImg : visibleImg} 
                            alt="Toggle Password Visibility" 
                            onClick={handlePasswordVisibility}
                        />

                    </Box>
                )}
            </Stack>
            <Box
                sx={{
                    width: pxToRem(381),
                    height: pxToRem(1),
                    background: (theme)=>theme.palette.grey[500],

                }}
            ></Box>
            {errorMessage && loginClicked && (
                    <Box sx={{
                        color: "red",
                        fontFamily: typography.fontFamily,
                        fontSize: pxToRem(14),
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                       margin: '0'
                    }}>
                        {errorMessage}
                    </Box>
                )}
        </Box>
    );
}
