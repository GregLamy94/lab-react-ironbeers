import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/beers"> Beers</Link>
        </li>
        <li>
          <Link to="/random-beers"> Random beers</Link>
        </li>
        <li>
          <Link to="/new-beer"> Create a new beer bruh</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
