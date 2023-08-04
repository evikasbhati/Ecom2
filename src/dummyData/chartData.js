import CircularButton from "../components/buttons/circularButton/CircularButton";
import { Box, Typography } from "@mui/material";
import chart1 from "../images/charts/Chart1.png";
import chart2 from "../images/charts/Chart2.png";
import chart3 from "../images/charts/Chart3.png";

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "270px",
  height: "30px",
};
const textStyle = {
  color: "#6B7A99",
  fontSize: "12px",
  fontWeight: "bold",
};
const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#8833FF",
    backgroundColor: " rgba(136, 51, 255, 0.1)",
    fontSize: "12px",
    width: "42px",
    height: "30px",
    fontWeight:"bold",
  };

const Orders = () => {
  return (
    <>
      <Box sx={containerStyle}>
        <Typography sx={textStyle}>6 total orders</Typography>
        <Typography sx={textStyle}>View report</Typography>
      </Box>
    </>
  );
};
const Sessions = () => {
   return (
    <>
      <Box sx={containerStyle}>
        <Box sx={boxStyle}>Live</Box>
        <Typography sx={textStyle}>6 total orders</Typography>
        <Typography sx={textStyle}>View report</Typography>
      </Box>
    </>
  );
};

const CustomerRate = () => {
  return (
    <>
      <Box sx={containerStyle}>
        <Box sx={containerStyle}>
          <CircularButton
            backgroundColor="rgba(136, 51, 255, 0.5)"
            size="10px"
          />
          <Typography sx={textStyle}>First Time</Typography>
        </Box>
        <Box sx={containerStyle}>
        <CircularButton backgroundColor="rgba(255, 102, 51, 0.5)" size="10px" />
        <Typography sx={textStyle}>Retuning</Typography>
        </Box>
      </Box>
    </>
  );
};

const chartData = [
  {
    id: 1,
    title: "Total Sales",
    chart: chart1,
    data: "$281.90",
    footer: <Orders />,
  },
  {
    id: 2,
    title: "Total Sessions",
    chart: chart2,
    data: 456,
    footer: <Sessions />,
  },
  {
    id: 3,
    title: "Customer rate",
    chart: chart3,
    data: "5.43%",
    footer: <CustomerRate />,
  },
];
export default chartData;
