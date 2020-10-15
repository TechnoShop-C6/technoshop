import React from "react";
import Login from "./Login.jsx";
import SignIn from "./SignIn.jsx";
import Laptop from './Laptop.jsx';
import Phone from './Phone.jsx';
import Accessory from './Accessory.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user :''
    }
  }

 

  render() {
    return (
        <div>
          <div className="navbar">
          <span className="logo"
            onClick={() => this.changeView('feed')}>
            TECHNOSHOP💻
          </span>
             <span className="nav" onClick={() => this.changeView("Laptop")}>
             Laptop
            </span>
            <span className="nav" onClick={() => this.changeView("Phone")}>
            {" "}
            Phone
           </span>
           <span className="nav" onClick={() => this.changeView("Accessory")}>
           {" "}
           Accessory
          </span>
          <div className="leftnav">
            <span className="nav" onClick={() => this.changeView("Profile")}>
              {" "}
             Profile
             </span>
          </div>
        </div>
        <div className="main" > 
        <Laptop />
        <Phone />
        <Accessory />
        </div>
      </div>
    );
  }
}
export default App;
