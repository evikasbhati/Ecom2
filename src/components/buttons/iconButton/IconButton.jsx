
const IconButton=(props)=>{
    const {icon,size ,alt,position,top,right}=props
    return(
        <>
        <img alt={alt} src={icon} style={{width:size,height:size,position:position,right:right,top:top}} />
        </>
    )
}
export default IconButton;