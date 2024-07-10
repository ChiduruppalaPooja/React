import React, { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import typography from "../../theme/typography";
import Logout from "../../assets/logout.svg";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { authSliceActions } from "../../store/store";



export default function TopNavigation({icon}) {
    const [profileVisibility, setProfileVisibility] = useState(false);
    const name = useSelector((state) => state.dashboard.profile.name);
    const profilePicture = useSelector((state) => state.dashboard.profile.profilePic);
    const email = useSelector((state) => state.dashboard.profile.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function showProfile(){
        setProfileVisibility(!profileVisibility)
    }
    const handleLogout = () => {
        dispatch(authSliceActions.logout());
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('rememberMe');
        navigate("/login");
    };

    return (
        <Stack justifyContent={"space-between"} direction={"row"} sx={{paddingLeft: '18px'}}>
            <Typography sx={
                {
                    height: '32px',
                    fontFamily: typography.fontFamily,
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '32px',
                    marginTop: '27px',
                    marginBottom: '21px',
                    borderRadius: '25px',
                    background: (theme)=>theme.palette.primary.contrastText
                }
            }>Good morning, {name}{icon} </Typography>
            <Box
                sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '24px',
                    marginTop: '15px',
                    marginRight: '26px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                }} onClick={showProfile}
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
            {profileVisibility && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50px', 
                            right: '0',
                            zIndex: 10, 
                            width: '215px',
                            height: '170px',
                            background: (theme)=>theme.palette.grey[100],
                            borderRadius: '8px',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px'
                        }}
                    >
                        <Box
                sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '24px',
                    marginTop: '10px',
                    
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
            <Typography variant="bodys" sx={{color: (theme)=> theme.palette.grey[400]}}>{email}</Typography>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={'left'}sx={{padding: '5px', width: '185px', borderRadius: '10px', background: (theme)=>theme.palette.primary.contrastText, marginTop: '5px', cursor: 'pointer' }} onClick={handleLogout}>
                    <Box className="Log" sx={{ paddingTop: '8px', paddingBottom: '7px', marginLeft: '27px', marginRight: '9px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <img src={Logout} alt="Logout" />
            </Box>
            <Typography variant="body2">Logout</Typography>
                    </Stack>

                    </Box>
                )}

        </Stack>

    );
}