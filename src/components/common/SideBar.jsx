import React, { useState, useEffect } from "react";
import { Box, Skeleton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Group from "../../assets/Group.svg";
import DashboardIconOn from "../../assets/DashboardIconOn.jsx";
import DashboardIconOff from "../../assets/DashboardIconOff.jsx";
import DashboardHover from "../../assets/DashboardHover.jsx";
import CoursesIconOff from "../../assets/CoursesIconOff.jsx";
import CoursesIconOn from "../../assets/CoursesIconOn.jsx";
import Logout from "../../assets/logout.svg";
import { authSliceActions } from "../../store/store";
import CoursesHover from "../../assets/CoursesHover.jsx";

export default function SideBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    const handleDashboardClick = () => {
        if (location.pathname !== "/dashboard") {
            navigate("/dashboard");
        }
    };

    const handleCoursesClick = () => {
        if (!location.pathname.startsWith("/courses")) {
            navigate(-1);  
        }
    };

    const handleLogout = () => {
        dispatch(authSliceActions.logout());
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('rememberMe');
        navigate("/login");
    };

    const isDashboardSelected = location.pathname === "/dashboard";
    const isCoursesSelected = location.pathname.startsWith("/courses");
    const isPDFPage = location.pathname.startsWith("/pdf");

    return (
        <Box sx={{ 
            position: 'fixed', 
            top: '0px',
            width: '80px', 
            minWidth: '80px', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100vh',
            background: (theme) => theme.palette.grey[100] ,
            zIndex: '110'
        }}>
            {loading ? (
                <Skeleton variant="rectangular" width={36} height={42.018} sx={{ marginTop: '22px', marginLeft: '22px', marginRight: '22px' }} />
            ) : (
                <Box
                    component="img"
                    src={Group}
                    sx={{
                        position: 'relative',
                        marginTop: '22px',
                        marginLeft: '22px',
                        marginRight: '22px',
                        cursor: 'pointer',
                        width: '36px',
                        height: '42.018px'
                    }}
                    alt="Group"
                />
            )}

            {loading ? (
                <Skeleton variant="rectangular" width={36} height={40} sx={{ marginTop: '30.98px', marginLeft: '22px' }} />
            ) : (
                isDashboardSelected ? (
                    <Box className="DashboardSelected" sx={{ position: 'relative', marginTop: '30.98px', display: 'flex', flexDirection: 'row', gap: '16px' }}>
                        <Box sx={{ background: (theme) => theme.palette.primary.main, width: '3px', height: '40px', marginTop: '8px', borderRadius: '17px', cursor: 'pointer', marginBottom: '8px'}}></Box>
                        <Box sx={{ padding: '8px', marginTop: '8px', borderRadius: '8px', background: (theme) => theme.palette.primary[200], cursor: 'pointer', marginBottom: '8px', display: 'flex'  }}>
                            <DashboardIconOn />
                        </Box>
                    </Box>
                ) : (
                    <Box className="DashboardNotSelected" sx={{ position: 'relative', marginTop: '30.98px' }}>
                        <Box sx={{ padding: '8px', marginTop: '8px', borderRadius: '8px', cursor: 'pointer', marginBottom: '8px', marginLeft: '19px', display: 'flex', justifyContent:'flex-start' }}
                           
                            onMouseEnter={isPDFPage ?() => setIsHovered("dashboard"): null}
                            onMouseLeave={() => setIsHovered(null)}
                            onClick={ handleDashboardClick} 
                        >
                            {isHovered === "dashboard" ? <DashboardHover /> : <DashboardIconOff />} 
                        </Box>
                    </Box>
                )
            )}

            {loading ? (
                <Skeleton variant="rectangular" width={36} height={40} sx={{ marginTop: '16px', marginLeft: '22px' }} />
            ) : (
                isCoursesSelected ? (
                    <Box className="CourseSelected" sx={{ position: 'relative', marginTop: '16px', display: 'flex', flexDirection: 'row', gap: '16px' }}>
                        <Box sx={{ background: (theme) => theme.palette.primary.main, width: '3px', height: '40px', marginTop: '8px', borderRadius: '17px', cursor: 'pointer', marginBottom: '8px' }}></Box>
                        <Box sx={{ padding: '8px', marginTop: '8px', borderRadius: '8px', background: (theme) => theme.palette.primary[200], cursor: 'pointer', marginBottom: '8px' }}>
                            <CoursesIconOn />
                        </Box>
                    </Box>
                ) : (
                    <Box className="CourseNotSelected" sx={{ position: 'relative', marginTop: '16px' }}>
                        <Box sx={{ padding: '8px', marginTop: '8px', borderRadius: '8px', cursor: isDashboardSelected && !isPDFPage ? 'default' : 'pointer', pointerEvents: isDashboardSelected && !isPDFPage ? 'none' : 'auto', marginBottom: '8px', marginLeft: '19px', display: 'flex', justifyContent: 'flex-start' }}
                            onMouseEnter={isPDFPage ?() => setIsHovered("courses"): null}
                            onMouseLeave={() => setIsHovered(null)}
                            onClick={isPDFPage ? handleCoursesClick : null}  
                        >
                            {isHovered === "courses" ? <CoursesHover /> : <CoursesIconOff />} 
                        </Box>
                    </Box>
                )
            )}

            {loading ? (
                <Skeleton variant="rectangular" width={36} height={40} sx={{ marginTop: 'auto', marginBottom: '16px', marginLeft: '27px', marginRight: '26px' }} />
            ) : (
                <Box className="Log" sx={{ marginTop: 'auto', marginBottom: '16px', marginLeft: '27px', marginRight: '26px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={handleLogout}>
                    <img src={Logout} alt="Logout" />
                </Box>
            )}
        </Box>
    );
}
