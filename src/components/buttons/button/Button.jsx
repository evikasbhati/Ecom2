
const Button=(props)=>{
    const {content,padding,width,height,fontSize,marginTop,borderRadius="5px",boxShadow="1.85123px 10.1818px 18.5123px rgba(51, 99, 108, 0.08)"}=props;

    const style={
        width:width,
        height:height,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        padding:padding,
        boxShadow: boxShadow,
        borderRadius:borderRadius,
        border:"none",
        marginTop:marginTop,
        fontSize:fontSize,
        color: "#677DA8",
        font:"Gilroy-Medium",
        lineHeight:"26px",
        cursor:"pointer",
    }
    return(
        <>
        <button style={style} >{content}</button>
        </>
    )
}
export default Button;