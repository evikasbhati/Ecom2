const ContentBox = (props) => {
  const { headSize, subHeadSize, head, subHead } = props;

  const headStyle = {
    color: "#677DA8",
    fontSize: headSize,
  };
  const subHeadStyle = {
    font: "Gilroy-Regular",
    fontSize: subHeadSize,
    color: "#677DA8",
    marginTop:"-5px"
  };
  return (
    <>
      <h1 style={headStyle}>{head}</h1>
      <p  style={subHeadStyle}>
        {subHead}
      </p>
    </>
  );
};
export default ContentBox;
