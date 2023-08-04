
const Divider=(props)=>{
    const {display,flexDirection,justifyContent,alignItems ,child}=props
    const style={
        display:display,
        flexDirection:flexDirection,
        justifyContent:justifyContent,
        alignItems:alignItems,
    }
    return(
        <>
        <div  style={style}>
            {child}
        </div>
        </>
    )
}
export default Divider;