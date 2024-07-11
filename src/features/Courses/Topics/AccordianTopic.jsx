import Accordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import typography, { pxToRem } from '../../../theme/typography'
import palette from '../../../theme/palette'
import { useState } from 'react'
import { Box, InputBase } from '@mui/material'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import RightArrowIcon from "../../../assets/rightArrow";
import File from "../../../assets/File";
import { useSelector } from 'react-redux'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SearchIcon from "../../../assets/searchIcon";


export default function AccordianTopics() {    
    const navigate = useNavigate();
    const [topicIndex, setTopicIndex] = useState(0)
    

  const handleMaterialClick = (name, url) => {
    navigate(`/pdf?name=${encodeURIComponent(name)}&url=${encodeURIComponent(url)}`);
  };


    function unitIdClickHandler(id) {
        setTopicIndex(id)
    }

    //Data from store
    const unitsData = useSelector((state) => state.courses.unitsData);

    let intialTopicState = ''

    if (unitsData !== undefined) {
        intialTopicState = unitsData?.map((item, index) => {
            if (index === topicIndex) return item.topics
        })
        console.log(intialTopicState)
    }
    const [searchInput, setSearchInput] = useState('')

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value)
    }

   
    return (
        <>
            <Box
                position={'relative'}
                display={'flex'}
                width={'600px'}
                flexDirection={'row'}
                marginTop={'25px'}
                marginLeft={'56px'}
                marginBottom={'25px'}
                sx={{alignItems: 'center'}}
            >
                {unitsData?.map((item, index) => (
                    <Tabs key={index} value={topicIndex}
                        sx={{
                            '& .MuiTabs-indicator':{
                                height:'5px',
                                border: '1px solid #F4F6F8',
                                borderRadius: '6.64px'
                            }
                        }}
                    >
                        <Tab
                            onClick={() => unitIdClickHandler(index)}
                            value={index}
                            label={item.unit_name}
                            sx={{
                                fontFamily: typography.fontFamily,
                                fontSize: pxToRem(15),
                                fontWeight: '600',
                                fontStyle: 'normal',
                                opacity: '0.5',
                            }}
                        />
                    </Tabs>
                ))}
                <InputBase
                    placeholder="Search topics"
                    startAdornment={<SearchIcon />} // one search icon 
                    value={searchInput}
                    onChange={handleSearchInputChange} // one function
                    sx={{
                        borderRadius: '6.64px',
                        border: '1px solid #F4F6F8',
                        background: '#F4F6F8',
                        display: 'flex',
                        height: '35px',
                        width: '144px',
                        padding: '7.589px 9.486px',
                        alignItems: 'center',
                        gap: '11.383px',
                        flexShrink: 0,
                        '&:hover': {
                            border: '1px solid #919EAB',
                        },
                    }}
                />
            </Box>
            <Box sx={{paddingBottom: '20px'}}>
            {
                intialTopicState[topicIndex]?.map((item, index) => {
                    if (item.topic_name.toLowerCase().includes(searchInput.toLowerCase())) { //this is for topic name searching
                        return (
                            
                            <Box
                                key={index}
                                display={'flex'}
                                flexDirection={'column'}
                                sx={{
                                    marginLeft: '56px',
                                    position: 'relative',
                                    width: '504px',
                                    background: '#FFF',
                                    
                                }}
                            >
                                <Accordion
                                    position={'relative'}
                                    sx={{
                                        border: '0px',
                                        background: '#FFF',
                                        boxShadow: 'none',
                                        
                                    }}
                                >
                                    <AccordionSummary
                                        sx={{
                                            padding: '0px',
                                            background: '#FFF',
                                            boxShadow: 'none',
                                            fontSize: pxToRem(16),
                                            color: palette.grey[400],
                                            marginLeft: '5px',
                                            textAlign:'left'
                                        }}
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                    >
                                        {item.topic_name}
                                    </AccordionSummary>

                                    {item.materials?.map((materialItems, materialItemsIndex) => {
                                        if (materialItems.name.toLowerCase().includes(searchInput.toLowerCase())) {   //this is for material                                      
                                        return (
                                            <AccordionDetails
                                                key={materialItemsIndex}
                                                sx={{
                                                    display: 'flex',
                                                    width: '504px',
                                                    fontSize: pxToRem(16),
                                                    color: palette.grey[400],
                                                    
                                                }}
                                                onClick={() => handleMaterialClick(materialItems.name, materialItems.url)}
                                            >
                                                <Box display={'flex'} flexDirection={'row'} >
                                                    <Box
                                                        sx={{
                                                            width: '16px',
                                                            height: '16px',
                                                            borderRadius: '5px',
                                                            
                                                            marginRight: '5px',
                                                            
                                                        }}
                                                    >
                                                        <File/>
                                                    </Box>
                                                    <Typography
                                                        sx={{
                                                            padding: '0px',
                                                            fontSize: pxToRem(16),
                                                            color: palette.grey[900],
                                                        }}
                                                    >
                                                        {materialItems.name}
                                                    </Typography>
                                                    <Box
                                                        display={'flex'}
                                                        flexDirection={'row'}
                                                        position={'absolute'}
                                                        right={'10px'}
                                                        sx={{
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        <Typography
                                                            color={palette.primary.main}
                                                            fontSize={pxToRem(14)}
                                                            fontWeight={400}
                                                            fontStyle={'normal'}
                                                            lineHeight={'normal'}
                                                            sx={{
                                                            }}
                                                        >
                                                            Start
                                                        </Typography>
                                                        <Box
                                                            sx={{

                                                                width: '14px',
                                                                height: '14px',
                                                                borderRadius: '5px',
                                                                marginTop: '4px',
                                                                marginLeft: '8px',
                                                            }}
                                                        >
                                                            <RightArrowIcon color='#0B58F5' />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </AccordionDetails>
                                        )
                                        } return null
                                    })}
                                </Accordion>
                                <Divider hard={1} />
                            </Box>
                            
                        )
                    }
                    return null
                })}
                </Box>
        </>
    )
}
