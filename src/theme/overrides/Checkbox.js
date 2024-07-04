import { alpha } from '@mui/material/styles';

export default function Checkbox(theme) {
  const color = theme.palette.grey[300];

  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.MuiCheckbox-root': {
            padding: 0, // Remove padding from MuiCheckbox-root
          },
          '&:hover': {
            boxShadow: 'none', // Remove box shadow on hover
            backgroundColor: 'transparent',
          },
          '&:focus': {
            boxShadow: 'none', // Remove box shadow on focus
            backgroundColor: 'transparent',
          },
        },
        sizeMedium: {
          '& .MuiSvgIcon-root': {
            width: 21, // Decrease icon size
            height: 21, // Corrected 'height' spelling
          },
        },
        sizeSmall: {
          '& .MuiSvgIcon-root': {
            width: 10, // Decrease icon size
            height: 10, // Corrected 'height' spelling
          },
        },
      },
    },
    MuiPrivateSwitchBase: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        position: 'relative',
      },
    },
  };
}

