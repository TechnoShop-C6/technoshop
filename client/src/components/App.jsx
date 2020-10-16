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
