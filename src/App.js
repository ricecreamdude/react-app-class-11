import React, {Fragment, Component} from 'react';
import './App.css';

import Search from './components/search';
import Header from './components/header';
import Maps from './components/maps';
import Results from './components/results';


class App extends Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){

    let styles = {
      results:{
        textAlign: 'center',
        margin: '0px auto'
      }
    }

    return (
      <div className="App">
        <Header 
          headerText="City Explorer"
          subText="Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"
        />
        <Search />
        <Maps />
        <section style={styles.results}>
          <Results />
          <Results />
          <Results />
          <Results />
          <Results />
        </section>
      </div>
    );
  }

}

export default App;
