import React, {Component} from 'react';
import './App.css';

import SearchForm from './components/searchForm';
import Header from './components/header';
import Maps from './components/maps';
import SearchResults from './components/searchResults'


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      location: {}
    }
  }

  render(){

    return (
      <div className="App">
        <Header 
          headerText="City Explorer"
          subText="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"
        />
        <SearchForm />
        <Maps />
        <SearchResults />
      </div>
    );
  }

}

export default App;
