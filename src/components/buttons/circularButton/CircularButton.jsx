const CircularButton=(props)=>{
    const {child,backgroundColor,img,size,isImg=false}=props;
    const style={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:backgroundColor,
        width:size,
        height:size,
        borderRadius:size,
    }
    return(
        <>
        {
            isImg && <img alt="" src={img}style={style} /> 
        }
        {

        !isImg && <div className="cirButton"style={style} ><div style={{color:"white"}}>{child }</div></div>
        }
            
        </>
    )
}
export default CircularButton;