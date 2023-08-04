import "./home.css";
import shoeImg from "../images/shoe.png";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/buttons/button/Button";
import arrow from "../images/arrow.png";
import Review from "../components/review/Review";
import shoeDesgin from "../images/shoeDesign.png";
import shoeShadow from "../images/showShadow.png";
import ContentBox from "../components/contenBox/ContentBox";
import ProductList from "../components/productList/ProductList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="midContainer">
          <Navbar />
          <div className="midContainer" style={{ display: "flex" }}>
            <div className="contentContainer">
              <ContentBox
                headSize="50px"
                subHeadSize="16px"
                head={
                  <span>
                    PURCHASE YOUR{" "}
                    <span style={{ textDecoration: "underline" }}> SHOES</span>{" "}
                    NOW.
                  </span>
                }
                subHead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac."
              />
              <Link to="/shop">
              <Button
                content="Shop Now"
                padding="19px, 46px, 19px, 46px"
                width="190px"
                height="64px"
                marginTop="30px"
                fontSize="22px"
                />
                </Link>
              <div
              className="arrowBox"
                style={{
                  display: "flex",
                  justifyContent: "left",
                  height: "200px",
                  width: "550px",
                }}
              >
                <img className="arrow" alt="arrow" src={arrow} />
                <Review
                  head="4.3"
                  subHead="(11.6k Total Review)"
                  flow="column"
                  width="280px"
                  height="114px"
                  headStyle={{
                    color: "#677DA8",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                  subHeadStyle={{ color: "#677DA8", fontWeight: 600 }}
                />
              </div>
            </div>
            <div className="imgContanier">
              <img className="shoe" alt="Shoe" src={shoeImg} />
              <img className="shoeDesign" alt="Shoe" src={shoeDesgin} />
              <img className="shoeShadow" alt="Shoe" src={shoeShadow} />
              <div className="offerContainer">
                <ContentBox
                  headSize="14px"
                  subHeadSize="12px"
                  head="GET UP TO 30% OFF"
                  subHead="You can get 30% off this product if you are buying now."
                />
              </div>
            </div>
          </div>
          <ProductList />
        </div>
      </div>
    </>
  );
};
export default Home;
