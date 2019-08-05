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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
