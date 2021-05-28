import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Profile = (props) => {
  const styleObject = { color: "red", textAlign: "center" };
  console.log(`props:`, props);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title style={styleObject}>{props.fullName}</Card.Title>
          <Card.Subtitle>{props.bio}</Card.Subtitle>
          <Card.Text>{props.profession}</Card.Text>
          <Card.Text>{props.children}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text>
            <button onClick={props.handleName}>Click me</button>
          </Card.Text>
        </Card.Footer>
      </Card>
    </>
  );
};
// Set default props
Profile.defaultProps = {
  fullName: "foulen ben foulen",
  bio: "pas bio",
  profession: "pas profession",
};
Profile.propTypes = {
  anyProp: PropTypes.any,
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  functionProp: PropTypes.func,
};

export default Profile;
