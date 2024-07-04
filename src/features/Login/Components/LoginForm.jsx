import React from "react";
import { Box, Button, FormControlLabel } from "@mui/material";
import typography from "../../../theme/typography";
import { pxToRem } from "../../../theme/typography";
import LoginTextBox from "../../../components/common/LoginTextBox";
import EyeSlashFill from "../../../assets/EyeSlashFill.svg";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authSliceActions } from "../../../store/store";
import { useEffect } from "react";
import visibleImg from "../../../assets/visible.png";

export default function LoginForm() {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        const storedRememberMe = localStorage.getItem('rememberMe') === 'true';
    
        if (storedRememberMe) {
          setUserName(storedUsername || '');
          setPassword(storedPassword || '');
          setRememberMe(storedRememberMe);
        }
      }, []);
    

      const handleUsernameChange = (event) => {
        const value = event.target.value;
        setUserName(value);
        validateUsername(value);
    };
    const validateUsername = (username) => {
        const regex = /.+@.+/;
        if (!regex.test(username)) {
            setErrorMessage("Username must contain an '@' symbol");
        } else {
            setErrorMessage("");
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const handleLogin = async () => {
        if (errorMessage) {
            console.log(errorMessage);
            return; 
        }
        try {
            const response = await fetch(
                `https://stagingstudentpython.edwisely.com/reactProject/loginUser?username=${userName}&password=${password}`
            );
            const value = await response.json();
            if (value.status === 200) {
                dispatch(authSliceActions.login());
                if (rememberMe) {
                    localStorage.setItem('username', userName);
                    localStorage.setItem('password', password);
                    localStorage.setItem('rememberMe', 'true');  
                } else {
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                    localStorage.removeItem('rememberMe');
                }
                navigate("/dashboard");
            }
        } catch (error) {
            console.error("Login failed", error);
        }
    };
    
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
           
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
            }}>
                <Box sx={{
                    color: "#161C24",
                    fontFamily: typography.fontFamily,
                    fontSize: pxToRem(48),
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal"
                }}>
                    Login
                </Box>
                <Box sx={{
                    color: "#161C24",
                    fontFamily: typography.fontFamily,
                    fontSize: pxToRem(16),
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal"
                }}>
                    Enter your account details
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                marginTop: "48px",
            }}>
                <LoginTextBox value={userName} onChange={handleUsernameChange}/>
                <LoginTextBox value={password} passwordImg={EyeSlashFill} visibleImg ={visibleImg} onChange={handlePasswordChange}/>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "9.18px",
               marginTop: "14px"
            }}>
                <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "9.18px", 
         
        }}
      >
        <Checkbox
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    sx={{
                        color:(theme)=> theme.palette.primary.main,
                        "& .MuiCheckbox-root": {
                            padding: 0,
                        },
                    }}
                />
        <Box
          
          sx={{
            color: (theme)=> theme.palette.grey[500],
            textAlign: "center",
            leadingTrim: "both",
            textEdge: "cap",
            fontFamily: typography.fontFamily,
            fontSize: pxToRem(14),
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            
            
        }}
        > Remember me </Box>
      </Box>
               

            </Box>
            <Box sx={{
                display: "flex",
                width: "381px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "10px",
                background: (theme)=> theme.palette.primary.main,
                marginTop: "41px",
                padding: "10px",
                cursor: "pointer"
            }}>
                <Button sx={{
                    color: (theme)=> theme.palette.primary.contrastText,
                    fontFamily: typography.fontFamily,
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    width: "381px",
                    padding:0,
                    margin: 0
                }} onClick={handleLogin}>Login</Button>

            </Box>
        </Box>


    );
}
