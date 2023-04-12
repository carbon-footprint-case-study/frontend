import Card from "react-bootstrap/Card";

function ActionCard(props) {
  const footprint = props.footprint;
  let cardStyle;
  let title;
  let content
  console.log(footprint);
  if (footprint <= 6.3) {
    title = "CONGO!! DOING GOOD";
    content = "Your annual carbon footprint is well below than the average in India. You're doing very good but there are still some scope  to reduce it further.";
      cardStyle = {
        position: "relative",
        width: "23rem",
        height: "40rem",
        backgroundColor: "#74c050",
      };
    } else if (footprint > 7) {
      title = "OH NO! EXCESS USAGE";
      content = "Your yearly ecological impact exceeds the target set for India, but there is still an opportunity to decrease it. Examine the breakdown below for suggestions on how to create a positive change."
      cardStyle = {
        position: "relative",
        width: "23rem",
        height: "40rem",
        backgroundColor: "#ee3350",
      };
    } else {
      title = "OH GOOD! CLOSE TO AVERAGE";
      content =
        "Your annual carbon footprint is currently similar to the average in India, but there are still opportunities for you to reduce it further.";
      cardStyle = {
        position: "relative",
      width: "23rem",
      height : "40rem",
      backgroundColor: "#fec01e",
    };
  }
  return (
    <Card style={cardStyle} className="container">
      <Card.Body style={{ position: "absolute", top: 10, zIndex: "1" }}>
        <Card.Title className="fs-2 text-center">{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <div className="mt-5 text-center" style={{position: "absolute", top: "280px"}}>
        <h3 className="fs-3">YOUR FOOTPRINT IS EQUAL TO</h3>
        <span className="fs-1">{footprint}*</span>
        <h3 className="fs-3">Tonnes</h3>
        </div>
      </Card.Body>
        <div>
          <img
            style={{padding: "0",
              width: "53%",
              position: "absolute",
              left: "80px",
              top: "170px"}}
            src="https://footprint.wwf.org.uk/img/foot.58137a28.svg"
            alt="aa"
          />
        </div>
    </Card>
  );
}

export default ActionCard;
