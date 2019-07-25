import React, {Fragment, Component} from 'react'

class Header extends Component{
  
  render(){
    return(
      <Fragment>
        <h1>{this.props.headerText}</h1>
        <p>{this.props.subText}</p>
      </Fragment>
    )
  }
}


export default Header

