import { Box, Typography, Popover , Radio, FormControlLabel, Stack, Paper} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
export default function SubjectDropdown(){
    const subjectData = useSelector((state)=> state.dashboard.subjects);
    const [selectedSubject,setSelectedSubject] = useState('');
    const [dropDownVisible, setDropdownVisibility] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const anchorRef = useRef(null);

    useEffect(() => {
        if (subjectData.length > 0) {
            setSelectedSubject(subjectData[0].name);
        }
    }, [subjectData]);

    function showSubjects(event){
        setDropdownVisibility(true);
        setAnchorEl(event.currentTarget);
    }
    function hideSubjects(){
        setDropdownVisibility(false);
        setAnchorEl(null);
    }
    const handleClose = () => {
        setAnchorEl(null);
        setDropdownVisibility(false);
    };
    const handleClick = () => {
        setAnchorEl(anchorRef.current);
    };
    
    const open = Boolean(anchorEl);
    const id = open ? 'popover' : undefined;

    return(
        <>
        <Stack ref={anchorRef} direction="row" justifyContent={"center"} alignItems={"center"} onClick={handleClick}>
        <Typography variant="body2" sx={{color:(theme)=>theme.palette.grey[400] }}>{selectedSubject}</Typography>
        {!dropDownVisible ? <KeyboardArrowDownIcon 
                        onClick={showSubjects}

                        sx={{
                            cursor: 'pointer',
                            color: (theme) => theme.palette.grey[400],
                            marginLeft: '10px'
                           
                        }} />: <KeyboardControlKeyIcon 
                        onClick={hideSubjects}

                        sx={{
                            cursor: 'pointer',
                            color: (theme) => theme.palette.grey[400],
                             marginLeft: '10px'
                        }} />
                        
                        }
                        </Stack>
        <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{cursor: 'pointer'}}
            >
                <Paper sx={{ padding: '14.56px 16px' }}>
                {subjectData.map((subject, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <Radio
                            sx={{
                                width: '10px',
                                height: '10px',
                                '& .MuiSvgIcon-root': {
                                    width: '10px',
                                    height: '10px',
                                },
                                marginRight: '6px'
                            }}
                            checked={selectedSubject === subject.name}
                            onChange={() => {
                                setSelectedSubject(subject.name);
                                handleClose();
                            }}
                        />
                        }
                        label={
                            <Typography
                                variant="body2"
                                sx={{
                                    cursor: 'pointer',
                                    color: (theme) => theme.palette.grey[700],
                                    padding: '5px 0px'
                                }}
                            >
                                {subject.name}
                            </Typography>
                        }
                        sx={{ margin: 0, display: 'flex', alignItems: 'center' }}
                    />
                ))}
                </Paper>
            </Popover>
        </>
    );
}