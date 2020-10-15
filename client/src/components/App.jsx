import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:this.props.name
    }
  }

  render() {
    return (
      <div>
       <h1>Welcome in our project : {this.state.user}</h1>
      </div>
    );
  }
}
export default App;
