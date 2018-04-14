import React, { Component } from 'react';
import List from '../../components/List.js';

class TopRated extends Component{
  constructor(props){
    super(props);

    this.state = {
    	TopRated : []
    };
  }

componentWillMount(){
	let tmdb_url = process.env.REACT_APP_TMDB_URL;
	let tmdb_api_key = process.env.REACT_APP_TMDB_API_KEY;

	fetch(`${tmdb_url}movie/top_rated?api_key=${tmdb_api_key}&page=1`)
	.then((response) => response.json())
	.then((responseJson) => {
		console.log(responseJson);
		this.setState({
			TopRated : responseJson.results
		});
	})
	.catch((error) => {
		console.log(error);
	});
}

  render(){
    return (
    <div className="TopRated">
    	<h1>TopRated</h1>
    	<List movies={this.state.TopRated} match={this.props.match}/>
    </div>
 	);
  }
}

export default TopRated;