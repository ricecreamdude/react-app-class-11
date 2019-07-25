import React, {Component} from 'react'

class Maps extends Component{
  render(){
    let styles = {
      width: "100%",
      height: "500px",
      border: '1px solid red'
    }
    return(
      <div style={styles}>
        Hi I'm a map
      </div>
    )
  }
}

export default Maps