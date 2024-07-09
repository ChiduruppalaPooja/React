import React from "react";
import LabelsTable from "./LabelsTable";
import { Stack } from "@mui/material";
import MuiCustomTableHeaderCellWithSortandSelect from "../../../../components/common/MuiCustomTableHeaderCellWithSortandSelect";

export default function TableAssessments(){
    return(
        <Stack direction={'column'} gap={'15px'} sx={{marginTop: '15px', width: '897px',
            height: '535px', borderRadius: '10px',
            border: '1px solid #F4F6F8',
            background: '#FFF',
            boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
            marginLeft: '19px'
           }}>
            <LabelsTable />
            {/* <MuiCustomTableHeaderCellWithSortandSelect /> */}
        </Stack>
    );
}