import React, {Component} from 'react';
import '../css/Car.css';

// import Radium from "radium";


class Car extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('Car componentWillReceiveProps', nextProps)
  }
  
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Car shouldComponentUpdate', nextProps, nextState)
    return nextProps.name.trim() !== this.props.name.trim();
  }
  
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('Car componentWillUpdate', nextProps, nextState)
  }
  
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('Car getDerivedStateFromProps', nextProps, prevState);
  //
  //   return prevState;
  // }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Car componentWillUpdate')
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Car getSnapshotBeforeUpdate')
  }
  
  componentWillUnmount() {
    console.log('Car componentWillUnmount')
  }
  
  
  render() {
    console.log('Car render');
    // if (Math.random() > 0.7) {
    //   throw new Error('ATA TA TA')
    // }
    const inputClasses = ['input'];
    
    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }
    
    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }
    
    return (
      <div className={"cars"}>
        <h3>{this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input type="text"
               onChange={this.props.onChangeName}
               value={this.props.name}
               className={inputClasses.join(` `)}/>
        <button onClick={this.props.buttonDelete}>Delete</button>
      </div>
    );
  }
}

export default Car;
