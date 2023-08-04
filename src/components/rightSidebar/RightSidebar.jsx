import MoreVertIcon from '@mui/icons-material/MoreVert';
import ordersData from '../../dummyData/ordersData';
import { Box, Typography } from "@mui/material"
import Chart from "../chart/Chart"
import IconBox from '../iconBox/IconBox';

const RightSidebar=()=>{
    const sideBarContainerStyle={
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"#F7F8FA",
        height:"1110px",
        padding:"30px",
    }
    const ContainerStyle={
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"#F7F8FA",
        height:"475px",
        borderRadius:"15px",
    }
    const headContainer={
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"270px",
        height:"70px",
}
    const footerContainer={
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        width:"220px",
        height:"390px",
}
    const ordersContainer={
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"220px",
        height:"65px",
}
    const IconColor={
        color:"#C3CAD9",
        marginRight:"20px"
    }
    const actionStyle={
        color:"#6B7A99",
        fontSize:"12px",
        fontWeight:"bold",
        marginLeft:"20px"
    }
    const orderStyle = {
        color: "#8833FF",
        fontSize: "12px",
        fontWeight:"bold",
        marginLeft:"-20px"
      };
      const textStyle = {
        color: "#6B7A99",
        fontSize: "12px",
        fontWeight: "bold",
        width:"130px",
      };
    
    return(
        <>
        <Box sx={sideBarContainerStyle}>
            <Chart />
            <Box sx={ContainerStyle} border="2px solid #EDEFF2">
                <Box sx={headContainer}>
                    <Typography sx={actionStyle}>Actions</Typography>
                    <Typography sx={orderStyle}>Orders</Typography>
                    <MoreVertIcon style={IconColor} />
                </Box>
                <Box sx={footerContainer} >
                {ordersData.map((order)=>(
                    <Box sx={ordersContainer}   key={order.id}>
                    <IconBox icon={order.time} width="40px" height="22px" padding="5px 15px" backgroundColor="#F7F8FA" border="2px solid #EDEFF2" borderRadius="15px" fontSize="10px" color="#7D8FB3"  fontWeight="bold"/>
                    <Typography sx={textStyle}>{order.info}</Typography>
                </Box>))}
                </Box>
            </Box>
        </Box>
        </>
    )
}
export default RightSidebar