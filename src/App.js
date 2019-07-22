import React,{Fragment, Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

class Counter extends Component{

  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  handlePlus = e => {
    let counter = this.state.counter + 1
    this.setState({counter})
  }

  handleMinus = e => {
    let counter = this.state.counter - 1
    this.setState({counter})
  }

  render(){
    return(
      <div>
        <h1>Current Count: {this.state.counter}</h1>
        <button onClick={this.handlePlus}> PLUS </button>
        <button onClick={this.handleMinus}> MINUS </button>
      </div>
    )
  }
}



export default App;
