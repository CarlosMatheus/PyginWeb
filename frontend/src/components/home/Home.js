import React from "react";
import ReactDOM from "react-dom";
import SimpleButton from "./SimpleButton";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <SimpleButton />
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('home'));