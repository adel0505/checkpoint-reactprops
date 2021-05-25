import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const handleName = (e) => {
    e.preventDefault();
    alert(`Hello ${props.fullName} `);
    console.log("The link was clicked.");
  };
  const styleObject = { color: "red", textAlign: "center" };
  console.log(`props:`, props);

  return (
    <>
      <h1 style={styleObject}> fullName: {props.fullName}</h1>
      <h2> bio: {props.bio}</h2>
      <h2> profession: {props.profession}</h2>
      {props.children}
      <button onClick={handleName}>Click me</button>
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
