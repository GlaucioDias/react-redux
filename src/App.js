import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Glaucio",
    };
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  changeState() {
    this.setState({
      name: "Glaucio Dias",
    });
  }

  resetState() {
    this.setState({
      name: "Glaucio",
    });
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.name}</div>
        <button onClick={this.changeState}>Mudar estado</button>
        <button onClick={this.resetState}>Reset estado</button>
      </div>
    );
  }
}
// function App() {

//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'Glaucio'
//     }
//   }

//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;
