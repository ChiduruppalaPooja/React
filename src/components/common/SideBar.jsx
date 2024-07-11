import React, { useState } from "react";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Group from "../../assets/Group.svg";
import DashboardOn from "../../assets/DashboardOn.svg";
import DashboardOff from "../../assets/DashboardOff.svg";
import DashboardHover from "../../assets/DashboardHover.svg";
import CoursesOff from "../../assets/CoursesOff.svg";
import CoursesOn from "../../assets/CoursesOn.svg";
import Logout from "../../assets/logout.svg";
import { authSliceActions } from "../../store/store";

export default function SideBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(null);

    const handleDashboardClick = () => {
        if (location.pathname !== "/dashboard") {
            navigate("/dashboard");
        }
    };

    const handleCoursesClick = () => {
        if (!location.pathname.startsWith("/courses")) {
            navigate("/courses");
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
            background: (theme) => theme.palette.grey[100] 
        }}>
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
            
            {/* Dashboard Icon */}
            {isDashboardSelected ? (
                <Box className="DashboardSelected" sx={{ position: 'relative', marginTop: '30.98px', display: 'flex', flexDirection: 'row', gap: '16px' }}>
                    <Box sx={{ background: (theme) => theme.palette.primary.main, width: '3px', height: '40px', marginTop: '8px', borderRadius: '17px', cursor: 'pointer', marginBottom: '8px' }}></Box>
                    <Box sx={{ padding: '8px', marginTop: '8px', borderRadius: '8px', background: (theme) => theme.palette.primary[200], cursor: 'pointer', marginBottom: '8px' }}>
                        <img src={DashboardOn} alt="Dashboard On" />
                    </Box>
                </Box>
            ) : (
                <Box className="DashboardNotSelected" sx={{ position: 'relative', marginTop: '30.98px' }}>
                    <Box sx={{ padding: '8px', marginTop: '8px', borderRadius: '8px', cursor: 'pointer', marginBottom: '8px', marginLeft: '19px' }}
                        onMouseEnter={() => setIsHovered("dashboard")}
                        onMouseLeave={() => setIsHovered(null)}
                        onClick={handleDashboardClick}
                    >
                        <img src={isHovered === "dashboard" ? DashboardHover : DashboardOff} alt="Dashboard" />
                    </Box>
                </Box>
            )}

            {/* Courses Icon */}
            {isCoursesSelected ? (
                <Box className="CourseSelected" sx={{ position: 'relative', marginTop: '16px', display: 'flex', flexDirection: 'row', gap: '16px' }}>
                    <Box sx={{ background: (theme) => theme.palette.primary.main, width: '3px', height: '40px', marginTop: '8px', borderRadius: '17px', cursor: 'pointer', marginBottom: '8px' }}></Box>
                    <Box sx={{ padding: '8px', marginTop: '8px', borderRadius: '8px', background: (theme) => theme.palette.primary[200], cursor: 'pointer', marginBottom: '8px' }}>
                        <img src={CoursesOn} alt="Courses On" />
                    </Box>
                </Box>
            ) : (
                <Box className="CourseNotSelected" sx={{ position: 'relative', marginTop: '16px' }}>
                    <Box sx={{ padding: '8px', marginTop: '8px', borderRadius: '8px', cursor: 'pointer', marginBottom: '8px', marginLeft: '19px' }}
                        onMouseEnter={() => setIsHovered("courses")}
                        onMouseLeave={() => setIsHovered(null)}
                        onClick={handleCoursesClick}
                    >
                        <img src={isHovered === "courses" ? CoursesOn : CoursesOff} alt="Courses Off" />
                    </Box>
                </Box>
            )}

            {/* Logout Icon */}
            <Box className="Log" sx={{ marginTop: 'auto', marginBottom: '16px', marginLeft: '27px', marginRight: '26px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={handleLogout}>
                <img src={Logout} alt="Logout" />
            </Box>
        </Box>
    );
}
