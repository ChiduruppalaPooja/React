import React, { useState } from "react";
import { Stack, Typography, Box, Popover, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import typography from "../../theme/typography";
import Logout from "../../assets/logout.svg";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { authSliceActions } from "../../store/store";

export default function TopNavigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const name = useSelector((state) => state.dashboard.profile.name);
    const profilePicture = useSelector((state) => state.dashboard.profile.profilePic);
    const email = useSelector((state) => state.dashboard.profile.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    return (
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}
            
            sx={{
                paddingLeft: '18px',
               paddingRight: '26px',
                marginLeft: '80px',
                zIndex: '20',
                borderBottom: '1px solid #DFE3E8',
                background: (theme) => theme.palette.primary.contrastText
            }}
        >
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
                   
                    background: (theme) => theme.palette.primary.contrastText
                }}
            >
                Good morning, {name} 👋
            </Typography>
            <IconButton
                sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '24px',
                    marginTop: '15px',
                    
                }}
                onClick={handleProfileClick}
            >
                <img
                    src={profilePicture}
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
                            src={profilePicture}
                            alt=""
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '24px',
                            }}
                        />
                    </Box>
                    <Typography variant="subtitle4">{name}</Typography>
                    <Typography variant="body2" sx={{ color: (theme) => theme.palette.grey[400] }}>{email}</Typography>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="left"
                        sx={{
                            padding: '5px',
                            width: '185px',
                            borderRadius: '10px',
                            background: (theme) => theme.palette.primary.contrastText,
                            marginTop: '5px',
                            cursor: 'pointer'
                        }}
                        onClick={handleLogout}
                    >
                        <Box sx={{  paddingBottom: '7px', marginLeft: '27px', marginRight: '9px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <img src={Logout} alt="Logout" />
                        </Box>
                        <Typography variant="body2">Logout</Typography>
                    </Stack>
                </Box>
            </Popover>
        </Box>
    );
}
