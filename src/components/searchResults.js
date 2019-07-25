import React, {Component} from 'react';
import Results from './results'


class SearchResults extends Component{



  render(){
    
    let styles = {
      results:{
        textAlign: 'center',
        margin: '0px auto'
      }
    }
    return(
      <section style={styles.results}>
        <Results />
        <Results />
        <Results />
        <Results />
        <Results />
      </section>
    )
  }
}


export default SearchResults