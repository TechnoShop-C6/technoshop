import React from "react";
import SignIn from "./SignIn.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}
export default App;
