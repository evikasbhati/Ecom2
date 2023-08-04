import IconButton from "../buttons/iconButton/IconButton";
import heartIcon from "../../images/icons/heart.png";
import Review from "../review/Review";
import productData from "../../dummyData/dummyData";
import "./productList.css";
import Button from "../buttons/button/Button";

const ProductList = () => {
  return (
    <>
      <div className="productListContainer">
        <h1
          style={{
            fontSize: "42px",
            color: " #677DA8",
            alignSelf: "flex-start",
            marginLeft: "10px",
            lineHeight:"71px",
            fontWeight:800,
          }}
        >
          POPULAR PRODUCTS
        </h1>
        <div className="productContainer">
          {productData.map((product) => (
            <div className="singleProduct" key={product.id}>
              <div className="productCard">
                <img
                  className="productImg"
                  src={product.img}
                  alt={product.title}
                />
                <IconButton
                  icon={heartIcon}
                  size="30px"
                  alt="heart"
                  position="relative"
                  top="8px"
                  right="8px"
                />
              </div>
              <Review
                head="(11.6k Reviews)"
                flow="column"
                width="300px"
                alignItems="flex-start"
                marginTop=" -20px"
                subFlow="row-reverse"
                subHead={product.title}
                subWidth="180px"
                headStyle={{
                  minWidth: "130px",
                  marginLeft: "10px",
                  fontSize: "12px",
                  color: " #202020",
                }}
                subStyle={{ width: "300px" }}
                subHeadStyle={{
                  fontSize: "16px",
                  color: " #202020",
                  marginLeft: "22px",
                  font: "Gilroy-Medium",
                  fontWeight: 500,
                }}
                index={1}
              />
              <div className="prodcutInfo">
                <h4 style={{
                      font: "Gilroy-Bold",
                      fontSize: "16px",
                      fontWeight: 700,
                }}>{product.price}</h4>
                <h4
                  style={{
                    font: "Gilroy-Medium",
                    fontSize: "18px",
                    fontWeight: 400,
                    textDecorationLine: "line-through",
                    textDecorationThickness: "0.5px"
                  }}
                >
                  {product.count}
                  <span
                    style={{
                      font: "Gilroy-Medium",
                      fontSize: "14px",
                      fontWeight: 300,
                      marginLeft: "5px",
                    }}
                  >
                    Sold Out
                  </span>
                </h4>
                <Button
                  content="Buy Now"
                  padding="5px"
                  width="82px"
                  height="36px"
                  fontSize="14px"
                  borderRadius="10px"
                  boxShadow="none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
