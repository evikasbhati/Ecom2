import { Box } from "@mui/material"

const IconBox=(props)=>{
    const {icon,padding="10px",size="30px",height,width,fontSize,fontWeight,color, imgSize,borderRadius="50%",border,backgroundColor="#FFFFFF",alt,img}=props
    const iconBoxStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:height || size,
        width:width || size,
        padding:padding,
        borderRadius:borderRadius,
        border:border,
        fontSize:fontSize,
        fontWeight:fontWeight,
        color:color,
        backgroundColor:backgroundColor,
        boxShadow:"0px 2px 5px rgba(38, 51, 77, 0.03)",
    }
    const imgStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:imgSize,
        width:imgSize,
        padding:padding,
        borderRadius:borderRadius,
        border:border,
        backgroundColor:backgroundColor,
        boxShadow:"0px 2px 5px rgba(38, 51, 77, 0.03)",
    }
    return(
        <>
        <Box sx={iconBoxStyle}>
            {icon || <img style={imgStyle}  src={img} alt={alt} />}
        </Box>
        </>
    )
}
export default IconBox