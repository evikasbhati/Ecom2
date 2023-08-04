import { Box } from "@mui/material"
import IconBox from "../iconBox/IconBox";
import iconData from "../../dummyData/iconData";
import userData from "../../dummyData/userData";

const leftContainerStyle={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"#F7F8FA",
    height:"1110px",
}
const iconContainerrStyle={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    height:"350px",
    margin:"50px 5px 50px 0px"
}
const userContainerStyle={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    height:"250px",
    margin:"50px 5px 50px 0px"
}

const LeftSideBar=()=>{
    return(
        <>
        <Box sx={leftContainerStyle}>
        <Box sx={iconContainerrStyle}>
            {iconData.map((element)=><IconBox key={element.id} img={element.img} imgSize="20px" icon={element.icon } />)}
        </Box>
        <Box sx={userContainerStyle}>
          {userData.map((element)=><IconBox key={element.id} img={element.user} size="50px" padding="0px" />)}  
        </Box>
        </Box>
        </>
    )
}
export default LeftSideBar