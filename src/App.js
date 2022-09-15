import './App.css';
import React, { Component } from 'react';


//build UI
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({count: this.state.count + 1}) /* .state i use to not mutate the state directly , i want to create always a new object */
  }

  decrement = () => {
    this.setState({count: this.state.count - 1}) /* .state i use to not mutate the state directly , i want to create always a new object */
  }

  render(){
  return (
    <div className="App">
   <button onClick={this.increment} className='counter'>+</button>
   <button onClick={this.decrement} className='counter'>-</button>
   <h2>{this.state.count}</h2> {/* will give initial state = 0 */}
    </div>
  );
}
}
export default App;
