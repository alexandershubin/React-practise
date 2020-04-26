import React, {Component} from "react";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends Component {
  state = {
    counter: 0
  }
  
  addCounter = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
  
  removeCounter = () => {
    if (this.state.counter <= 0) {
      return this.state.counter
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }
  
  render() {
    return (
      <>
        <Counter2/>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.addCounter}>+</button>
        <button onClick={this.removeCounter}>-</button>
      </>
    )
  }
}