import { Box, Divider } from "@mui/material";
import NavBox from "../components/navBox/NavBox";
import ProductLowerMenu from "../components/productLowerMenu/ProductLowerMenu";
import ProductsUppperMenu from "../components/productsUppperMenu/ProductsUppperMenu";
import ShopProductList from "../components/shopProductList/ShopProductList";
import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import RightSidebar from "../components/rightSidebar/RightSidebar";

const containerStyle = {
  display: "flex",
};
const Shop = () => {
  return (
    <>
      <NavBox />
      <Divider />
      <Box sx={containerStyle}>
        <Box
          sx={{
            width: "110px",
            height: "1330px",
            backgroundColor: "#F7F8FA",
            "@media(max-width: 1200px)": { display: "none" },
          }}
        >
          <LeftSideBar />
        </Box>
        <Divider orientation="vertical" flexItem={true} />
        <Box
          sx={{
            width: "1190px",
            height: "1270px",
            padding: "30px",
            backgroundColor: "#F7F8FA",
            "@media(max-width: 1200px)": { width: "100%" },
            "@media(max-width: 410px)": { width: "100%", padding: "0px" },
          }}
        >
          <Box
            sx={{
              borderRadius: "20px",
              boxShadow: "0px 2px 5px rgba(38, 51, 77, 0.05)",
              backgroundColor: "#FFFFFF",
              width: "100%",
            }}
          >
            <ProductsUppperMenu />
            <Divider />
            <ProductLowerMenu />
            <Divider />
            <ShopProductList />
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem={true} />
        <Box
          sx={{
            width: "330px",
            height: "1330px",
            backgroundColor: "#F7F8FA",
            "@media(max-width: 1200px)": { display: "none" },
          }}
        >
          <RightSidebar />
        </Box>
      </Box>
    </>
  );
};
export default Shop;
