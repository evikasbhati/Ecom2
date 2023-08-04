import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { Badge, Box, TextField, Typography } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import MenuIcon from "@mui/icons-material/Menu";
import IconBox from "../iconBox/IconBox";

const IconColor = {
  color: "#C3CAD9",
};
const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#F7F8FA",
  height: "100px",
  width: "100%",
};
const menuContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "500px",
  "@media(max-width: 1200px)": { width: "450px" },
  "@media(max-width: 850px)": { display: "none" },
};
const searchContainerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  width: "250px",
  height: "25px",
  borderRadius: "150px",
  padding: "15px 40px 15px 20px",
  boxShadow: " 0px 2px 5px rgba(38, 51, 77, 0.03)",
  "@media(max-width: 1200px)": { display: "none" },
};
const notifcationStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "300px",
  "@media(max-width: 550px)": { display: "none" },
  "@media(max-width: 850px)": { width: "150px" },
};

const searchMediaQuery = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "30px",
  width: "30px",
  padding: "10px",
  borderRadius: "50%",
  color: "#C3CAD9",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 2px 5px rgba(38, 51, 77, 0.03)",
  "@media(maxwidth: 1200px)": { display: "flex" },
  "@media(min-width: 1200px)": { display: "none" },
};
const userMediaQuery = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  "@media(max-width: 1200px)": { display: "flex" },
  "@media(min-width: 1200px)": { display: "none" },
  "@media(max-width: 850px)": { width: "250px", marginLeft: "250px" },
  "@media(max-width: 750px)": { marginLeft: "150px" },
  "@media(max-width: 550px)": { display: "none" },
};

const NavBox = () => {
  return (
    <>
      <Box sx={containerStyle}>
        <IconBox icon={<MenuIcon style={IconColor} />} />
        <Typography
          sx={{
            "@media(max-width: 850px)": { marginLeft: "50px" },
            "@media(max-width: 550px)": { marginLeft: "0px" },
          }}
          fontSize="18px"
          color="#4D5E80"
          fontWeight="bold"
        >
          Constructor
        </Typography>
        <Box sx={menuContainer}>
          <Typography fontSize="14px" color="#7D8FB3" fontWeight="bold">
            Dashboard
          </Typography>
          <Typography fontSize="14px" color="#7D8FB3" fontWeight="bold">
            About Us
          </Typography>
          <Typography fontSize="14px" color="#7D8FB3" fontWeight="bold">
            News
          </Typography>
          <Typography fontSize="14px" color="#7D8FB3" fontWeight="bold">
            User Policy
          </Typography>
          <Typography fontSize="14px" color="#7D8FB3" fontWeight="bold">
            Contacts
          </Typography>
          <MoreHorizRoundedIcon style={IconColor} />
        </Box>
        <Box sx={searchContainerStyle}>
          <SearchRoundedIcon style={IconColor} />
          <TextField
            type="search"
            variant="standard"
            fullWidth
            sx={{
                "& .MuiInputBase-root": {
                    "& input": {
                        fontSize:"12px", color:"#ADB8CC", fontWeight:"bold",marginLeft:"5px"
                    }
                }}}
            InputProps={{ disableUnderline: true }}
            placeholder="Search Transcations and Documents"
          />
        </Box>
        <Box sx={userMediaQuery}>
          <AccountCircleRoundedIcon
            sx={{"@media(max-width: 850px)": { display: "flex" },"@media(min-width: 850px)": { display: "none"}}}
            style={IconColor}
          />
          <Typography
            sx={{"@media(max-width: 850px)": { display: "flex" },"@media(min-width: 850px)": { display: "none"}}}
            fontSize="14px"
            color="#7D8FB3"
            fontWeight="bold"
          >
            Clayton Santos
          </Typography>
          <Box sx={searchMediaQuery}>
            <SearchRoundedIcon style={IconColor} />
          </Box>
        </Box>
        <Box
          sx={{
            "@media(max-width: 550px)": { display: "flex" },
            "@media(min-width: 550px)": { display: "none" },
            padding: "10px",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
          }}
        >
          <AccountCircleRoundedIcon style={IconColor} />
        </Box>
        <Box sx={notifcationStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "150px",
              "@media(max-width: 850px)": { display: "none" },
              "@media(min-width: 850px)": { display: "flex" },
            }}
          >
            <AccountCircleRoundedIcon style={IconColor} />
            <Typography fontSize="14px" color="#7D8FB3" fontWeight="bold">
              Clayton Santos
            </Typography>
          </Box>
          <Badge color="error" variant="dot" sx={{position:"relative",top:"-22px",right:"-56px"}} />
            <IconBox icon={<NotificationsRoundedIcon style={IconColor} />} />
          <IconBox icon={<CancelRoundedIcon style={IconColor} />} />
        </Box>
      </Box>
    </>
  );
};
export default NavBox;
