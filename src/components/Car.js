import React, {Component} from 'react';
import classes from '../css/Car.module.css';
import withClass from "../hoc/witnClass";
import PropTypes from 'prop-types';

class Car extends Component {
  constructor(props) {
    super(props);
    
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.index === 0) {
      this.inputRef.current.focus()
    }
  }
  
  render() {
    const inputClasses = [classes.input];
    
    if (this.props.name !== '') {
      inputClasses.push(classes.green)
    } else {
      inputClasses.push(classes.red)
    }
    
    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold)
    }
    
    return (
      <React.Fragment>
        <h3>{this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(` `)}/>
        <button onClick={this.props.buttonDelete}>Delete</button>
      </React.Fragment>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  buttonDelete: PropTypes.func
}

export default withClass(Car, classes.cars);
