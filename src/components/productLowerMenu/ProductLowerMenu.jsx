import { Box, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import ViewModuleRoundedIcon from '@mui/icons-material/ViewModuleRounded';
import IconBox from "../iconBox/IconBox";

const IconColor={
    color:"#C3CAD9",
}

const containerStyle={
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    height:"70px",
    padding:"0px 10px",
    "@media(max-width: 550px)": { padding:"0px 5px" }
}

const optionContainerStyle={
    display:"flex",
    alignItems:"center",
}

const ButtonOption=(props)=>{
    const {icon,content,width="96px"}=props;
    const buttonOptionStyle={
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        width:width,
        height:"40px",
        boxShadow: "0px 2px 5px rgba(38, 51, 77, 0.03)",
        borderRadius: "0px",
        border:"2px solid #F5F6F7",
    "@media(max-width: 550px)": { width:"40px" }

    }
    
    return(
        <>
        <Box sx={buttonOptionStyle}>
            {icon}  
            {content && <Typography sx={{"@media(max-width: 550px)": { display: "none" }}} marginRight="10px" fontSize="12px" color="#6B7A99" fontWeight="Bold" >{content}</Typography>}
        </Box>
        </>
    )
}
const ProductLowerMenu=()=>{

    return(
        <>
        <Box sx={containerStyle}>
            <Box sx={containerStyle}>
            <IconBox icon={<CheckCircleIcon style={IconColor} />} />
            <Typography sx={{"@media(max-width: 550px)": { display:"none"}}} fontSize="12px" color="#7D8FB3" fontWeight="Bold" >Select All</Typography>
            </Box>
            <Box sx={optionContainerStyle}>
                <ButtonOption icon={<FilterListIcon style={IconColor} />} content="Filters" />
                <ButtonOption icon={<SearchRoundedIcon style={IconColor} />} content="Search" />
                <ButtonOption icon={<EditIcon style={IconColor} />} content="Edit" />
                <ButtonOption icon={<DeleteIcon style={IconColor} />} content="Delete" />
            </Box>
            <Box sx={optionContainerStyle}>
                <ButtonOption width="40px" icon={<ViewHeadlineIcon  style={IconColor} />}  />
                <ButtonOption width="40px" icon={<ViewModuleRoundedIcon  style={IconColor} />}  />
            </Box>
        </Box>
        </>
    )
}
export default ProductLowerMenu