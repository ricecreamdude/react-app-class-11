import React from 'react'

class Movies extends React.Component{
 
  render(){

    let movieList = () => {
      props.data.map( (movie) => {
        return (
          <li>{movie.title}</li>
        )
      })
    }

    return(
      <ul>
        {movieList}
      </ul>
    )
  }

}

export default Movies