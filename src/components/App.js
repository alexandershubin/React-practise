import React, {Component} from 'react';
import Car from "./Car";
import '../css/App.css';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  constructor(props) {
    console.log('App constructor')
    super(props);
    this.state = {
      cars: [
        {name: 'Ford', year: '2017'},
        {name: 'Volvo', year: '2019'},
        {name: 'Mazda', year: '2020'}
      ],
      pageTitle: 'Choose your cars',
      showCars: false
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

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render')
    return (
      <div className="App">
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <h1>{this.props.title}</h1>
        <button onClick={this.toggleCarsHandler.bind()}>toggle cars</button>
          {this.state.showCars
            ? this.state.cars.map((car, index) => {
              return (
                <ErrorBoundary  key={index}>
                <Car
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
