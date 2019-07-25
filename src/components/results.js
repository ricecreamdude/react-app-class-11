import React, {Component} from 'react'

class Results extends Component{


  render(){
    let styles = {
      resultStyle:{
        display: 'inline-block',
        width: '20%',
        height: '300px',
        // float: 'left',
        border: '1px solid black'        
      }
    }
  
    return(
      <div style={styles.resultStyle}>
        Hi I am some content
      </div>
    )
  }
}


export default Results