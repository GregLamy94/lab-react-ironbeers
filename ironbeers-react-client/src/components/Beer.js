import React from "react";
import { Link } from "react-router-dom";

const Beer = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <Link to={ "/"+props.id }>
        {" "}
        <img
          src={props.imagePath}
          alt="god michel is watching u"
          style={{ width: "30px" }}
        />
      </Link>

      <div>{props.tagline}</div>
      <div>{props.contributedBy}</div>
    </div>
  );
};

export default Beer;
