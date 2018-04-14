import React, { Component } from 'react';
import { Carousel } from 'react-materialize';
import './Home.css';

const tmdb_url = process.env.REACT_APP_TMDB_URL;
const tmdb_api_key = process.env.REACT_APP_TMDB_API_KEY;
const img_url = process.env.REACT_APP_TMDB_IMAGE_URL;

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      nowPlaying : [],
      reviews : [],
      isLoading : true,
      discovered : []
    };
  }

  //will run after the constructor, but before it is rendered to the screen
  componentWillMount(){

    fetch(`${tmdb_url}movie/now_playing?api_key=${tmdb_api_key}&page=1`, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        nowPlaying : responseJson.results
      });
      this.getReview();
    })
    .catch((error) => {
      console.error(error);
    });
  }   

  

  getReview(){
    let movie_id = this.state.nowPlaying[0].id;

    fetch(`${tmdb_url}movie/${movie_id}/reviews?api_key=${tmdb_api_key}&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
                  reviews : responseJson.results
              });
      })
      .catch((error) => {
        console.error(error);
      }); 
   }

  renderReview(){
    let date = new Date();
    date = date.toString();
    let reviews = this.state.reviews;
    let movie = this.state.nowPlaying[0];

    return reviews.map((review) => 
      (
        <div className="left" key={review.id}>
          <img src={`${img_url}w300${movie.poster_path}`} alt="news feed preview"/>
          <div>
            <strong>{review.author}</strong>
            <p>
              {review.content}
            </p>
            <span>{date}</span>
          </div>
        </div>
      )
    );
  }

  renderNowPlaying(){
      //grab the first 4 movies from the nowPlaying list
      let movies = this.state.nowPlaying.slice(0, 4);

      return movies.map((movie) => (
          <div key={movie.id}>
              <img src={`${img_url}w300${movie.poster_path}`} alt="poster"/>
              <span>{ movie.title }</span>
          </div>
      ));
  }

  renderSlides(){

      let movies = this.state.nowPlaying.slice(5, 9);
      let images = movies.map((movie) => {
          return movie.backdrop_path;
      });

      return images.map((img, i) => (
        <div className='red' style={{backgroundImage : `url(${img_url}w1280${img})`, backgroundSize : 'cover', backgroundPosition : 'top left'}} key={i}>
          <h2>{ movies[i].title }</h2>
        </div>
      ));
  }

  render(){
    let date = new Date();
    date = date.toString();
    date = date.substring(0, 15);

    return (
      <div className="home">
        {
          this.state.nowPlaying.length > 0 ? (
            <Carousel options={{ duration : 200, fullWidth: true, indicators : true }}>
              { this.renderSlides() }
            </Carousel>
          ) : null
        }

        <div className="newsFeed">
          <div className="top">
            <i className="fa fa-coffee"></i>
            <h2>News Feed</h2>
            <a href="#seeall">See all news</a>
          </div>
          <div className="content">
            <div className="left">
              <img src="http://placehold.it/715x353" alt="news feed preview"/>
              <strong>News Feed subtitle</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <span>{date}</span>
            </div>
            <div className="right">
              <ul>
                <li>
                  <img src="http://placehold.it/145x150" alt="news feed preview"/>
                  <div>
                    <strong>News Feed subtitle</strong>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <span>{date}</span>
                  </div>
                </li>
                <li>
                  <img src="http://placehold.it/145x150" alt="news feed preview"/>
                  <div>
                    <strong>News Feed subtitle</strong>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <span>{date}</span>
                  </div>
                </li>
                <li>
                  <img src="http://placehold.it/145x150" alt="news feed preview"/>
                  <div>
                    <strong>News Feed subtitle</strong>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <span>{date}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="inTheatre">
          <div className="top">
            <i className="fa fa-film"></i>
            <h2>In Theatre</h2>
          </div>
          <div className="content">
            {               
              this.state.nowPlaying.length > 0 ? (
                this.renderNowPlaying()
              ) : (
                <div className="preloader"><img src={require('../../img/loading_icon.gif')} alt="poster"/></div>
              )
            }
          </div>
        </div>

        <div className="didYouKnow">
          <div className="top">
            <i className="fa fa-film"></i>
            <h2>Did You Know</h2>
          </div>
          <div className="content">
            { 
              this.state.reviews.length > 0 ? (
                this.renderReview()
              ) : (
                <div className="left">
                  <img src="http://placehold.it/535x570" alt="review"/>
                  <div>
                    <strong>News Feed subtitle</strong>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                    <span>{date}</span>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }

 }; 


export default Home;