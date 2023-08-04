import chartData from "../../dummyData/chartData";
import { Box, Divider, Typography } from "@mui/material";

const mainContainerStyle={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
}
const containerStyle={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    width:"270px",
    height:"190px",
    border:"2px solid #EDEFF2",
    borderRadius:"15px",
    marginBottom:"20px"
}
const textStyle={
    color:"#6B7A99",
    fontSize:"12px",
    fontWeight:"bold",
    alignSelf:"flex-start",
    marginLeft:"20px"
}
const dataChartContainer={
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"230px",
        height:"70px",
}

const Chart=()=>{
    return(
        <>
        <Box sx={mainContainerStyle}>
            {chartData.map((element)=>(
            <Box sx={containerStyle} key={element.id} >
            <Typography sx={textStyle}>{element.title}</Typography>
            <Box sx={dataChartContainer}>
            <Typography fontSize="24px" color="#4D5E80" fontWeight="bold" > {element.data}</Typography>
            <Box><img src= {element.chart}alt={element.title} /></Box>
            </Box>
            <Divider width="100%" />
            {element.footer}
        </Box>))}
        </Box>
        </>
    )
}
export default Chart