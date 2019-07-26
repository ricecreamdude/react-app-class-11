import React, {Fragment, Component} from 'react';

class SearchForm extends Component{
  constructor(props){
    super(props)
    this.state={
      query: ''
    }
  }

  handleChange = (e) => {
    let query = e.target.value
    this.setState({query})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.query)
  }

  render(){
    return(

      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder="Enter a location" 
          onChange={this.handleChange}
        />
        <button
          onSubmit={this.handleSubmit}
        >Submit</button>
      </form>

    )
  }

}

export default SearchForm