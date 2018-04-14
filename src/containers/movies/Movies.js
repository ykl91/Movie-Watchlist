import React, { Component } from 'react';
import './Movies.css';
import { Route } from 'react-router-dom';
import Upcoming from "./Upcoming.js";
import NowPlaying from "./NowPlaying";
import TopRated from "./TopRated";


class Movies extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let currentScreen = this.props.match.url;

    return (
      <div className="movies">
        <div className="asideNav">
          <a href={`${currentScreen}/nowPlaying`}>Now Playing</a>
          <a href={`${currentScreen}/upcoming`}>Upcoming</a>
          <a href={`${currentScreen}/topRated`}>Top Rated</a>
        </div>
        <div className="tabs">
          <Route exact path={`${currentScreen}/`} component={NowPlaying} />
          <Route path={`${currentScreen}/upcoming`} component={Upcoming} />
          <Route path={`${currentScreen}/nowPlaying`} component={NowPlaying} />
          <Route path={`${currentScreen}/topRated`} component={TopRated} />
        </div>
      </div>
    );
  }
}

export default Movies;