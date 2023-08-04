import starIcon from "../../images/icons/star.png";
import "./review.css"
const star = [
  {
    id: "1",
    icon: starIcon,
  },
  {
    id: "2",
    icon: starIcon,
  },
  {
    id: "3",
    icon: starIcon,
  },
  {
    id: "4",
    icon: starIcon,
  },
  {
    id: "5",
    icon: starIcon,
  },
];

const Review = (props) => {
  const {
    flow = "row",
    alignItems,
    width,
    height,
    marginTop,
    head,
    subHead,
    subFlow = "row",
    headStyle,
    subHeadStyle,
    subWidth,
    index=5
  } = props;

  const style = {
    flexDirection: flow,
    alignItems:alignItems,
    width:width,
    height:height,
    marginTop:marginTop
  };
  const subStyle = {
    flexDirection: subFlow,
    width:subWidth,
  };
  const starStyle = {
    width: "130px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: subFlow,
    alignItems: alignItems,
  };

  return (
    <>
      <div className="reviewContainer" style={style}>
        <div className="upperContainer" style={subStyle}>
          <div style={headStyle}>{head}</div>
          <div style={starStyle}>
            {star.slice(0,index).map((star) => (
              <img alt="star" key={star.id} src={star.icon} />
            ))}
          </div>
        </div>
        <div style={subHeadStyle}>{subHead}</div>
      </div>
    </>
  );
};
export default Review;
