import React, {Fragment, Component} from 'react';

class Search extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  render(){
    return(
      <Fragment>
        <input 
          placeholder="Enter a location" 
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </Fragment>
    )
  }

}

export default Search