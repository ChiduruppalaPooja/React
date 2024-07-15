import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Materials from "./Materials"; 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from "../../../assets/Divider";

export default function SelectTopic({ topicName, materials , searchText}) {
    const [showMaterials, setShowMaterials] = useState(false);

    const handleToggle = () => {
        setShowMaterials(!showMaterials);
    };

    let filteredMaterials = materials;

    if (searchText) {
        if (topicName.toLowerCase().includes(searchText.toLowerCase())) {
            filteredMaterials = materials;
        } else {
            filteredMaterials = materials.filter(material => 
                material.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }
    }

    useEffect(() => {
        if (searchText && filteredMaterials.length > 0) {
            setShowMaterials(true);
        } else if (!searchText) {
            setShowMaterials(false);
        }
    }, [searchText, filteredMaterials]);
    return (
        <Stack direction="column" sx={{ position: 'relative', marginLeft: '56px', width: '506px', textAlign: 'left' }}>
            <Accordion
                sx={{
                    boxShadow: 'none',
                    borderRadius: '0px',
                    '&:before': {
                        display: 'none',
                    },
                }}
                expanded={showMaterials}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        paddingRight: '10px',
                        minHeight: '48px',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'flex-start', 
                        '& .MuiAccordionSummary-content': {
                            justifyContent: 'flex-start', 
                        }
                    }}
                    onClick={handleToggle}
                >
                    <Typography variant="subtitle4" sx={{ color: (theme) => theme.palette.grey[400],  whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            maxWidth: '450px', textAlign: 'left' }}>{topicName}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0 }}>
                    <Materials materials={filteredMaterials} />
                </AccordionDetails>
            </Accordion>
            <Divider  />
        </Stack>
    );
}
