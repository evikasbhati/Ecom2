import logo from "../../images/logoIcon.png"
import "./navbar.css"
import IconButton from "../buttons/iconButton/IconButton";
import searchIcon from "../../images/icons/search.png"
import shopIcon from "../../images/icons/shop.png"
import CircularButton from "../buttons/circularButton/CircularButton";
import navUser from "../../images/users/navUser.png"

const style={
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
}

const content=[
    {
        id:"1",
        value:"Home"
    },
    {
        id:"2",
        value:"Gallery"
    },
    {
        id:"3",
        value:"Shop"
    },
    {
        id:"4",
        value:"Contact"
    },
]

const Navbar=()=>{
    return(
        <>
        <div className="navbar">
        <div style={style} className="logoContainer">
        <img alt="logo" className="logo" src={logo} />
        <h2 style={{font:"Gilroy-Black",color:"#677DA8",fontWeight:800,fontSize:28}}>BIZPUSH</h2>
        </div>
        <div  style={style} className="menu" >
            { content.map((item)=>(<h3 style={{fontWeight:500,font:"Gilroy-Medium",color:"#4D4D4D"}} key={item.id}>{item.value}</h3>))} 
         </div>    
        <div style={style}  className="shopIcons">
            <IconButton icon={searchIcon} size="22px" />
            <IconButton icon={shopIcon} size="19px" />
            <CircularButton child={0} backgroundColor="#677DA8" size="19px" />
            <CircularButton isImg={true} img={navUser} size="46px" />
        </div>
        </div>
        </>
        )
}
export default Navbar;