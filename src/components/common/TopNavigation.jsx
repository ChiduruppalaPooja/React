import React, { useState, useEffect } from "react";
import { Typography, AppBar, Toolbar, IconButton, Popover, Box, Skeleton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { authSliceActions } from "../../store/store";
import Logout from "../../assets/logout.svg";
import typography from "../../theme/typography";

export default function TopNavigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const dashprofile = useSelector((state) => state.dashboard.profile); 

    const [profile, setProfile] = useState(dashprofile); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('dashboardData'));
        if (storedProfile) {
            setProfile(storedProfile);
        }
    }, []);

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'profile-popover' : undefined;

    const handleLogout = () => {
        dispatch(authSliceActions.logout());
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('rememberMe');
        navigate("/login");
    };

    
   
    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('dashboardData'));
        if (storedProfile) {
            setProfile(storedProfile);
        }
    }, [dashprofile]);
    if (!profile) {
        return <Skeleton variant="rectangular" width={100} height={64} />;
    }
    return (
        <AppBar position="sticky" elevation={0} sx={{ width: '100%', borderBottom: (theme) => `1px solid ${theme.palette.grey[200]}`, background: (theme) => theme.palette.primary.contrastText, zIndex: 100 }}>
            <Toolbar sx={{ paddingLeft: '18px', paddingRight: '26px', marginLeft: '80px', zIndex: '20' }}>
                <Typography
                    sx={{
                        height: '32px',
                        fontFamily: typography.fontFamily,
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '32px',
                        marginTop: '27px',
                        marginBottom: '21px',
                        borderRadius: '25px',
                        color: (theme) => theme.palette.text.primary,
                    }}
                >
                    Good morning, {profile.name} 👋
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                    sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '24px',
                        margin: '15px 0 15px 0 ',
                        padding: 0,
                    }}
                    onClick={handleProfileClick}
                >
                    <img
                        src={profile.profile_picture}
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '24px',
                        }}
                    />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Box
                        sx={{
                            width: '215px',
                            height: '170px',
                            background: (theme) => theme.palette.grey[100],
                            borderRadius: '8px',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                        >
                            <img
                                src={profile.profile_picture}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '24px',
                                }}
                            />
                        </Box>
                        <Typography variant="subtitle4">{profile.name}</Typography>
                        <Typography variant="body2" sx={{ color: (theme) => theme.palette.grey[400] }}>{profile.email}</Typography>
                        <Box
                            sx={{
                                width: '185px',
                                borderRadius: '10px',
                                background: (theme) => theme.palette.primary.contrastText,
                                marginTop: '5px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '5px',
                            }}
                            onClick={handleLogout}
                        >
                            <Box sx={{ paddingBottom: '7px', marginLeft: '27px', marginRight: '9px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={Logout} alt="Logout" />
                            </Box>
                            <Typography variant="body2">Logout</Typography>
                        </Box>
                    </Box>
                </Popover>
            </Toolbar>
        </AppBar>
    );
}
