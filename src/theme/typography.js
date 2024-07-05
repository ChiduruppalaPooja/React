// ----------------------------------------------------------------------
import palette from './palette';
import '@fontsource/poppins';
export function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
  }
  
  export function pxToRem(value) {
    return `${value / 16}rem`;
  }
  
  export function responsiveFontSizes({ sm, md, lg }) {
    return {
      '@media (min-width:600px)': {
        fontSize: pxToRem(sm),
      },
      '@media (min-width:900px)': {
        fontSize: pxToRem(md),
      },
      '@media (min-width:1200px)': {
        fontSize: pxToRem(lg),
      },
    };
  }
  
  // ----------------------------------------------------------------------
  // const lineHeightRatio = 80 / 64;
  const FONT_PRIMARY = [
    'Poppins',
    
  ].join(',');
  const FONT_PRIMARY_REGULAR = [
    'Poppins',
      'Arial',
      'sans-serif',
    ].join(',');
    const FONT_PRIMARY_MEDIUM = [
      'Poppins',
      'Arial',
      'sans-serif',
    ].join(',');
    const FONT_PRIMARY_BOLD = [
      'Poppins',
      'Arial',
      'sans-serif',
    ].join(',');
  // const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font
  const fontWeightRegular=300,fontWeightMedium=500,fontWeightBold=600;
  const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontFamily:FONT_PRIMARY_REGULAR,
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(25 * 1.6),
      fontSize: pxToRem(25),
      ...responsiveFontSizes({ sm: 52, md: 58, lg: 25 }),
    },
    h2: {
      fontFamily:FONT_PRIMARY_MEDIUM,
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(25 * 1.6),
      fontSize: pxToRem(25),
      ...responsiveFontSizes({ sm: 25, md: 25, lg: 25 }),
    },
    h3: {
      fontFamily:FONT_PRIMARY_BOLD,
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(25 * 1.6),
      fontSize: pxToRem(25),
      ...responsiveFontSizes({ sm: 26, md: 30, lg: 25 }),
    },
    h4: {
      fontFamily:FONT_PRIMARY_REGULAR,
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(20 * 1.6),
      fontSize: pxToRem(20),
      ...responsiveFontSizes({ sm: 20, md: 24, lg: 20 }),
    },
    h5: {
      fontFamily:FONT_PRIMARY_MEDIUM,
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(20 * 1.6),
      fontSize: pxToRem(20),
      ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    },
    h6: {
      fontFamily:FONT_PRIMARY_BOLD,
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(20 * 1.6),
      fontSize: pxToRem(20),
      ...responsiveFontSizes({ sm: 18, md: 18, lg: 20 }),
    },
    subtitle1: {
      fontWeight: FONT_PRIMARY_BOLD,
      lineHeight: 1.5,
      fontSize: pxToRem(18),
    },
    subtitle2: {
      fontWeight: 400,
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    subtitle3: {
      fontWeight: 500,
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    subtitle4: {
      fontWeight: 500,
      lineHeight: pxToRem(24),
      fontSize: pxToRem(16),
    },
    body1: {
      fontFamily:FONT_PRIMARY_REGULAR,
      lineHeight: pxToRem(12 * 1.6),
      fontSize: pxToRem(12),
      fontWeight: fontWeightRegular,
    },
    body2: {
      fontFamily:FONT_PRIMARY_MEDIUM,
      lineHeight: pxToRem(12 * 1.6),
      fontSize: pxToRem(12),
      fontWeight: fontWeightMedium
    },
    body3: {
      fontFamily:FONT_PRIMARY_BOLD,
      lineHeight: pxToRem(12 * 1.6),
      fontSize: pxToRem(12),
      fontWeight: fontWeightBold
    },
    bodys: {
      fontFamily:FONT_PRIMARY_BOLD,
      lineHeight: pxToRem(16),
      fontSize: pxToRem(12),
      fontWeight: 400
    },
    body4: {
      fontFamily:FONT_PRIMARY_REGULAR,
      lineHeight: pxToRem(15 * 1.6),
      fontSize: pxToRem(15),
      fontWeight: fontWeightRegular
    },
    body5: {
      fontFamily:FONT_PRIMARY_MEDIUM,
      lineHeight: pxToRem(15 * 1.6),
      fontSize: pxToRem(15),
      fontWeight: fontWeightMedium
    },
    body6: {
      fontFamily:FONT_PRIMARY_BOLD,
      lineHeight: pxToRem(15 * 1.6),
      fontSize: pxToRem(15),
      fontWeight: fontWeightBold
    },
    body7: {
      fontFamily:FONT_PRIMARY_REGULAR,
      lineHeight: pxToRem(15 * 1.6),
      fontSize: pxToRem(10),
      fontWeight: fontWeightRegular
    },
    caption1: {
      fontFamily:FONT_PRIMARY_REGULAR,
      lineHeight: pxToRem(10 * 1.57),
      fontSize: pxToRem(10),
      color:palette.grey[500],
      fontWeight: fontWeightRegular
    },
    caption2: {
      fontFamily:FONT_PRIMARY_MEDIUM,
      lineHeight: pxToRem(10 * 1.57),
      fontSize: pxToRem(14),
      color:palette.grey[500],
      fontWeight: fontWeightMedium
    },
    caption3: {
      fontFamily:FONT_PRIMARY_BOLD,
      lineHeight: pxToRem(10 * 1.57),
      fontSize: pxToRem(10),
      color:palette.grey[500],
      fontWeight: fontWeightBold
    },
    caption4: {
      fontFamily:FONT_PRIMARY_REGULAR,
      lineHeight: pxToRem(10 * 1.57),
      fontSize: pxToRem(10),
      color:palette.grey[500],
      fontWeight: fontWeightRegular
    },
    caption5: {
      fontFamily:FONT_PRIMARY_MEDIUM,
      lineHeight: pxToRem(10 * 1.57),
      fontSize: pxToRem(10),
      color:palette.grey[500],
      fontWeight: fontWeightMedium
    },
    caption6: {
      fontFamily:FONT_PRIMARY_BOLD,
      lineHeight:pxToRem(10 * 1.57),
      fontSize: pxToRem(10),
      color:palette.grey[500],
      fontWeight: fontWeightBold
      
    },
    caption7: {
      fontFamily:FONT_PRIMARY_BOLD,
      lineHeight:pxToRem(10 * 1.57),
      fontSize: pxToRem(12),
      fontWeight: 300
      
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: 700,
      lineHeight: 24 / 14,
      fontSize: pxToRem(14),
      textTransform: 'capitalize',
    },
    
  };
  
  export default typography;
  