import React from "react";
import Login from "./Login.jsx";
import SignIn from "./SignIn.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Login />




        <SignIn />
      </div>
    );
  }
}
export default App;
