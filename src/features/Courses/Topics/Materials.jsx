import React from "react";
import { Stack, Typography } from "@mui/material";
import File from "../../../assets/File";
import RightArrowIcon from "../../../assets/rightArrow";
import { useNavigate } from "react-router-dom";

export default function Materials({ materials }) {
  const navigate = useNavigate();

  const handleMaterialClick = (name, url) => {
    navigate(`/pdf?name=${encodeURIComponent(name)}&url=${encodeURIComponent(url)}`);
  };

  return (
    <Stack direction="column" gap="24px" justifyContent={'space-around'} sx={{ marginLeft: '26px', paddingBottom: '10px' }}>
      {materials.map((material, index) => (
        <Stack key={index} direction="row" gap={'218px'} justifyContent={'space-around'}  sx={{ cursor: 'pointer' }} onClick={() => handleMaterialClick(material.name, material.url)}>
          <Stack direction={"row"} gap={"10px"}>
            <File />
            <Typography variant="caption2" sx={{ color: (theme) => theme.palette.grey[900], width: '175px', textAlign: 'left' }}>
              {material.name}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={"10px"}>
            <Typography variant="caption2" sx={{ color: (theme) => theme.palette.primary.main }}>
              Start
            </Typography>
            <RightArrowIcon color='#0B58F5' />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
