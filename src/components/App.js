import React, {Component} from 'react';
import Car from "./Car";
import classes from '../css/App.module.css';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    console.log('App constructor')
    super(props);
    this.state = {
      cars: [
        {name: 'Ford', year: 2017},
        {name: 'Volvo', year: 2019},
        {name: 'Mazda', year: 2020}
      ],
      pageTitle: 'Choose your cars',
      showCars: false,
      clicked: false
    }
  }
  
  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  };
  
  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars: cars
    })
  };
  
  deleteHandler(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({
      cars: cars
    })
  }
  
  render() {
    return (
      <div className={classes.App}>
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter/>
        </ClickedContext.Provider>
        <h1>{this.props.title}</h1>
        <button onClick={this.toggleCarsHandler.bind()}>toggle cars</button>
        <button onClick={() => this.setState({clicked: true})}>Changed clicked</button>
        {this.state.showCars
          ? this.state.cars.map((car, index) => {
            return (
              <ErrorBoundary key={index}>
                <Car
                  index={index}
                  name={car.name}
                  year={car.year}
                  buttonDelete={this.deleteHandler.bind(this, index)}
                  onChangeName={e => this.onChangeName(e.target.value, index)}
                />
              </ErrorBoundary>
            )
          })
          : null
        }
      </div>
    )
  }
}

export default App;
