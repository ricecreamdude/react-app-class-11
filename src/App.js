import React, {Component} from 'react';
import './App.scss';

import SearchForm from './components/searchForm';
import Header from './components/header';
import Maps from './components/maps';
import SearchResults from './components/searchResults'

import superagent from 'superagent'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      location: null,
      forecasts: [],
      movies:[],
      events:[],
      trails:[],
      yelp:[]
    }
  }

  handleSubmit = async (query) => {

    //backend URL
    const url = 'https://jb-flask-hello-world.onrender.com'
  
    const locationData = await superagent.get(`${url}/location?data=${query}`)

    const location = {
      search_query: locationData.body.search_query,
      formatted_query: locationData.body.formatted_query,
      latitude: locationData.body.latitude,
      longitude: locationData.body.longitude,
    }
    
    const qs = `?data[formatted_query]=${location.formatted_query}&data[latitude]=${location.latitude}&data[longitude]=${location.longitude}&data[search_query]=${location.search_query}`
    
    //Key name and variable name match = {location:location}
    this.setState({location})
    
    const forecasts = await superagent.get(`${url}/weather${qs}`)
    const yelp = await superagent.get(`${url}/yelp${qs}`)
    const movies = await superagent.get(`${url}/movies${qs}`)
    const events = await superagent.get(`${url}/events${qs}`)
    const trails = await superagent.get(`${url}/trails${qs}`)

    this.setState({
      events,
      movies,
      yelp,
      forecasts,
      trails
    })

  }

  render(){

    return (
      <div className="App">
        <Header 
          headerText="City Explorer"
          subText="Enter a location below to learn about the weather, 
          events, restaurants, movies filmed there, and more!"
        />
        <SearchForm 
          handleSubmit={this.handleSubmit}
        />
        
        {this.state.location && (
          <Maps 
            latitude={this.state.location.latitude}
            longitude={this.state.location.longitude}
          />
        )}
        <SearchResults />
      </div>
    );
  }

}

export default App;
