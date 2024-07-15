import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CustomCardSmall from "../../../components/common/CustomCardSmall";


export default function ContinueReading(){
    const continueReadingData = useSelector((state) => state.courses.continueReadingCardData);
   

    return (
        <Stack direction={'column'} gap={'12px'} sx={{ marginTop: '47px', textAlign: 'left', marginLeft: '56px' }}>
            <Typography variant="h" sx={{ color: (theme) => theme.palette.common.black }}>Continue Reading</Typography>
            <Stack direction={'row'} gap={'22px'} alignItems={'center'}>
                {continueReadingData?.map((data, index) => (
                    <CustomCardSmall 
                        key={index}
                        index={index}
                        title={data.name}
                        id={data.id}
                        url={data.url}
                        file_name={data.file_name}
                        
                    />
                )) }
            </Stack>
        </Stack>
    );
}
