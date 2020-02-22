import React from "react";
//import logo from './logo.svg';
import "./App.css";
import HomePage from "./components/HomePage";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetails from "./components/BeerDetails";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/:id" component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
