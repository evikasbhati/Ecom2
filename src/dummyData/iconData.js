import ExploreIcon from '@mui/icons-material/Explore';
import StarRateIcon from '@mui/icons-material/StarRate';
import messenger from "../images/icons/messenger.png"
import stock from "../images/icons/stock.png"
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const IconColor={
    color:"#C3CAD9",
}
const iconData=[

    {
        id:1,
        icon:<ExploreIcon  style={IconColor}/>,
    },
    {
        id:2,
        icon:<StarRateIcon style={IconColor} />,
    },
    {
        id:3,
        img:messenger,
    },
    {
        id:4,
        img:stock,
    },
    {
        id:5,
        icon:<PublicIcon style={IconColor} />,
    },
    {
        id:6,
        icon:<LocationCityIcon style={IconColor} />,
    },
]

export default iconData