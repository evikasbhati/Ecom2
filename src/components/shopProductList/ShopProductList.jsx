import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Grid, Typography } from "@mui/material"
import productData from "../../dummyData/productData"
import IconBox from "../iconBox/IconBox"

const gridContainer={
    padding:"45px 45px 30px 45px",
    boxShadow: "0px 2px 5px rgba(38, 51, 77, 0.03)",
    borderRadius:"20px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
}
const containerStyle={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    width:"220px",
    height:"265px",
    padding:"20px 0px",
    margin:"5px",
    borderRadius:"10px",
    backgroundColor:"#FAFBFC",
    '@media(max-width: 850px)':{width:"315px"},
    '@media(max-width: 550px)':{width:"100%"},
    '@media(max-width: 390px)':{width:"100%"}
}
const ShopProductList=()=>{
    return(
        <>
        <Box sx={gridContainer}>
            <Grid container   rowSpacing={{xs: 12, sm: 6, md: 3 ,}} columnSpacing={{ xs: 12, sm: 6, md: 3, }}>
                {productData.map((product)=>(
                        <Grid item key={product.id}  xs={12} sm={6} md={3}   >
                            <Box sx={containerStyle}>
                                <Box sx={{position:"relative" ,top:"-15px",left:"-84px"}}>
                                { product.isChecked ?<CheckCircleIcon  style={{color:"#8833FF" }} />:<Box backgroundColor="#FFFFFF" border="2px solid #F2F3F5" width="20px" height="20px" borderRadius="50%" />}
                                </Box>
                            <img src={product.img} alt={product.title}/>
                            <Typography color="#6B7A99" fontSize="14px" fontWeight="bold" >{product.title}</Typography>
                            <IconBox icon={product.price} width="40px" height="22px" padding="5px 15px" backgroundColor="#F7F8FA" border="2px solid #EDEFF2" borderRadius="15px" fontSize="10px" color="#7D8FB3"  fontWeight="bold"/>
                            </Box>
                        </Grid>))}
            </Grid>
        <IconBox icon={"Load More"} width="70px" height="30px" padding="10px 20px" backgroundColor="#FFFFFF" border="2px solid #F5F6F7" borderRadius="30px" fontSize="12px" color="#7D8FB3"  fontWeight="bold"/>
        </Box>
        </>
    )
}
export default ShopProductList