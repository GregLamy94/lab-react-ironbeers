import React, { Component } from "react";
// import BeerDetails from "./BeerDetails";
import axios from "axios";
import Header from "./Header";
import Beer from "./Beer";

class Beers extends Component {
  state = { listOfBeers: [] };

  getAllBeers = () => {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers`)
      .then(responseFromApi => {
        // console.log(responseFromApi);
        this.setState({ listOfBeers: responseFromApi.data });
      })
      .catch(err => console.log("Error", err));
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.listOfBeers.map(beer => {
          return (
            <Beer
              key={beer._id}
              id={beer._id}
              name={beer.name}
              imagePath={beer.image_url}
              tagline={beer.tagline}
              contributedBy={beer.contributed_by}
            />
          );
        })}
      </div>
    );
  }
}

export default Beers;
