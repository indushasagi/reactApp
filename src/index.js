import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let Incrementcount = Basic_comp =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.Increcount = this.Increcount.bind(this);
    }
    Increcount() {
      this.setState({ count: this.state.count + 1 });
    }
    render() {
      return (
        <div>
          <Basic_comp {...this.state} increment={this.Increcount} />
        </div>
      );
    }
  };

const Button = props => {
  return (
    <div>
      <button onClick={props.increment}> Count : {props.count}</button>
    </div>
  );
};

let Compclick = Incrementcount(Button);

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Compclick />
    </div>
  );
};

// inheriting
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends person {
  constructor(name, age, role, ...contact) {
    super(name, age);
    this.role = role;
    this.contact = contact;
    this.state = { name: "", age: "", role: "", data: {} };
    this.getDetails = this.getDetails.bind(this);
  }

  getDetails() {
    const newState = {};
    for (let [i, v] of `${this.contact}`.split(",").entries()) {
      newState["phone" + i] = v;
    }
    Object.values(newState).map(function(value){
      console.log(value);
      return value;
    });

    console.log(
      "The details of employee : Name =>",
      `${this.name}`,
      ", Age =>",
      `${this.age}`,
      ", Role =>",
      `${this.role}`      
    );
  }

  render() {
    return <div />;
  }
}

let Details = new Employee("Sagi", "25", "SE", "9876543210", "9876543211");
Details.getDetails();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


