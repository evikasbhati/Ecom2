import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import BagIcon from "../../images/icons/bag.png";
import IconBox from '../iconBox/IconBox';
import { Box, Typography } from '@mui/material';

const ProductsUppperMenu=()=>{
const containerStyle={
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"#F7F8FA",
    height:"90px",
    width:"100%",
    padding:"0px 10px",
    '@media(max-width: 550px)':{padding:"0px"}

}
const menuContainer={
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    width:"300px",
    '@media(max-width: 550px)':{display: "none"}
}
const sideContainer={
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    width:"200px",
    '@media(max-width: 550px)':{width:"100px"}
}
const rightContainer={
    display:"flex",
    justifyContent:"space-evenly",
    alignItems:"center",
    width:"136px",
    height:"40px",
    backgroundColor:"#8833FF",
    borderRadius:"30px",
    padding:" 0px 5px",
    marginRight:"30px",
    "@media(max-width: 550px)":{display: "none"},
}
const addStyle={
    display:"flex",
    justifyContent:"space-evenly",
    alignItems:"center",
    width:"80px",
    height:"40px",
    backgroundColor:"#8833FF",
    borderRadius:"30px",
    padding:" 0px 5px",
    marginRight:"30px",
    '@media(maxwidth: 550px)':{display: "flex"},
    '@media(min-width: 550px)':{display: "none"},
}
const activeStyle={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"80px",
    height:"40px",
    backgroundColor:"#FFFFFF",
    borderRadius:"30px",
    padding:" 3px 10px 3px 15px",
    boxShadow:"0px 2px 5px rgba(38, 51, 77, 0.03)",
    '@media(maxwidth: 550px)':{display: "flex"},
    '@media(min-width: 550px)':{display: "none"},
}
const IconColor={
    color:"#8833FF",
}
    return(
        <>
        <Box sx={containerStyle} >
            <Box sx={sideContainer}>
                <Box sx={{'@media(max-width: 550px)':{display: "none"}}}>
                <IconBox borderRadius="0px" img={BagIcon} />
                </Box>
                <Typography  fontSize="16px" color="#6B7A99" fontWeight="bold">Products</Typography>
            </Box>
            <Box sx={activeStyle}>
                <Typography fontSize="13px" color="#8833FF" fontWeight="bold" >Active</Typography>
                <KeyboardArrowDownIcon sx={ {color:'#C3CAD9'}} />
            </Box>
            <Box sx={menuContainer}>
                <Typography fontSize="13px" color="#8833FF" fontWeight="bold" >Active</Typography>
                <Typography fontSize="12px" color="#6B7A99" fontWeight="bold">Draft</Typography>
                <Typography fontSize="12px" color="#6B7A99" fontWeight="bold">Assembly</Typography>
            </Box>
            <Box sx={addStyle}>
                <IconBox size="8px" backgroundColor="#cc9ffc" padding="5px" icon={<AddIcon fontSize='8px' style={IconColor} />} />
                <Typography color="#FFFFFF" fontSize="14px" >Add </Typography>
            </Box>
            <Box sx={rightContainer}>
                <IconBox size="8px" backgroundColor="#cc9ffc" padding="5px" icon={<AddIcon fontSize='8px' style={IconColor} />} />
                <Typography color="#FFFFFF" fontSize="14px" >Add Product</Typography>
            </Box>
        </Box>
        </>
    )
}
export default ProductsUppperMenu;