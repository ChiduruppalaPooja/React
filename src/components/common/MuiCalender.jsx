import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';

export default function MuiCalendar() {
  return (
    <Box
                            sx={{
                                borderRadius: '10px',
                                border: '1px solid',
                                borderColor: (theme)=>theme.palette.grey[100],
                                background: (theme)=>theme.palette.primary[0],
                                boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                            }}
                        >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar
                                    views={['day']}
                                    sx={{
                                        '&.MuiDateCalendar-root': {
                                            width: '100%',
                                            maxHeight: '234px',
                                            marginLeft: 0,
                                        },
                                        '& .MuiPickersCalendarHeader-root': {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            margin: '0px',
                                            padding: '0px',
                                            paddingLeft: '20px',
                                            paddingRight: '10px',
                                            width: '100%',
                                            marginTop: '2px',
                                        },
                                        '& .MuiPickersCalendarHeader-labelContainer': {
                                            margin: '0px',
                                            padding: '0px',
                                            gap: '20px',
                                        },
                                        '& .MuiPickersCalendarHeader-label': {
                                            margin: '0px',
                                            padding: '0px',
                                            color: (theme)=>theme.palette.primary.main,
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal',
                                            textAlign: 'center',
                                        },
                                        '& .MuiPickersArrowSwitcher-button': {
                                            margin: '0px',
                                            padding: '0px',
                                        },
                                        '& .MuiPickersArrowSwitcher-spacer': {
                                            width: '0px',
                                            height: '0px',
                                        },
                                        '& .MuiDayCalendar-root': {
                                            width: '100%',
                                            maxHeight: '234px',
                                            marginLeft: 0,
                                        },
                                        '& .css-1fpg8w0-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)':{
                                            background: (theme)=>theme.palette.primary.main,
                                            color: (theme)=>theme.palette.primary.contrastText,
                                            borderColor: (theme)=>theme.palette.primary.main,
                                        },
                                        '& .css-th7zkb-MuiDateCalendar-root .MuiPickersDay-root':{
                                            color: (theme)=>`${theme.palette.primary.contrastText} !important`,
                                        },
                                        '& .MuiDayCalendar-header': {
                                            paddingLeft: '20px',
                                            paddingRight: '20px',
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                        },
                                        '& .MuiDayCalendar-weekDayLabel': {
                                            margin: '0px',
                                            padding: '0px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal',
                                        },
                                        '& .MuiDayCalendar-weekContainer': {
                                            margin: '0px',
                                            padding: '0px',
                                            paddingLeft: '20px',
                                            paddingRight: '20px',
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                        },
                                        '& .MuiDayCalendar-slideTransition': {
                                            width: '100%',
                                            maxHeight: '234px!important',
                                            margin: '0px',
                                            padding: '0px',
                                        },
                                        '& .MuiPickersDay-root': {
                                            margin: '0px',
                                            padding: '0px',
                                            width: '36px',
                                            height: '28px',
                                            borderRadius: '3.57px',
                                            color: (theme)=>theme.palette.grey[800],
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            lineHeight: 'normal',
                                        },
                                        '& .MuiPickersDay-daySelected': {
                                            color: (theme)=>theme.palette.primary.contrastText,
                                            background: (theme)=>theme.palette.primary.main,
                                            borderRadius: '3.57px',
                                        }
                                    }}
                                />
                            </LocalizationProvider>
                        </Box>
                    
                                );}