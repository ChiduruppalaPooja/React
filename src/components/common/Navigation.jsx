import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SelectionLine from "../../assets/selectionLine";
import Topics from "../../features/Courses/Topics/Topics";

export default function Navigation({ name, selected, onClick, topics, materials }) {
  return (
    <>
      <Stack direction="column" gap="5px" onClick={onClick} sx={{ cursor: 'pointer', width: "59px" }}>
        <Typography variant="body5" sx={{ color: (theme) => (selected ? theme.palette.primary.main : theme.palette.grey[400]) }}>
          {name}
        </Typography>
        {selected ? <SelectionLine /> : <Box sx={{ height: "4px" }}></Box>}
      </Stack>
      
    </>
  );
}
