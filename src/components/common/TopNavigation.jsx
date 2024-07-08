import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import typography from "../../theme/typography";

export default function TopNavigation({icon}) {
    const name = useSelector((state) => state.dashboard.profile.name);
    const profilePicture = useSelector((state) => state.dashboard.profile.profilePic)

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


        </Stack>

    );
}