import React from "react";
import { Grid, Box } from "@mui/material";
import Welcome from "../../features/Login/Components/Welcome";
import LoginImage from "../../assets/LoginImage.svg";
import LoginForm from "../../features/Login/Components/LoginForm";

export default function Login() {
    return (
        <Grid container sx={{
            borderRadius: 5,
            background: (theme) => theme.palette.primary.main,
            minHeight: '100vh', 
            overflow: 'hidden' 
        }}>
            
            <Grid item xs={12} md={6} sx={{
                borderRadius: { xs: '5px 5px 0 0', md: '25px 0 0 25px' },
                position: 'relative',
                minHeight: '100vh',
                overflow: 'hidden'
            }}>
                <Box sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img
                        src={LoginImage}
                        alt=""
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: { xs: '5px 5px 0 0', md: '25px 0 0 25px' },
                        }}
                    />
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <Welcome />
                    </Box>
                </Box>
            </Grid>

           
            <Grid item xs={12} md={6} sx={{
                background: (theme) => theme.palette.primary.contrastText,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: { xs: '0 0 5px 5px', md: '0 25px 25px 0' },
                minHeight: '100vh'
            }}>
                <LoginForm />
            </Grid>
        </Grid>
    );
}
