import React from "react";

import AdminAcceuil from "./AdminAcceuil.jsx"
import UserAcceuil from "./UserAcceuil.jsx"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:this.props.name
    }
  }
  render() {
    if(this.state.user === "admin"){
      return (
        <div>
          <AdminAcceuil/>
        </div>
      )
    }else {
      return (
        <div>
          <UserAcceuil name={this.state.user}/>
        </div>
      )
    }
  }
}

export default App;
