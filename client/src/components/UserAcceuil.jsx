import React from 'react';
import axios from 'axios';

import Laptop from "./Laptop.jsx"
import Phone from "./Phone.jsx"
import Accessory from "./Accessory.jsx"
import Profile from "./Profile.jsx"

class UserAcceuil extends React.Component {
    constructor(props){
    super(props)
    this.state={
     data : [],
     user:this.props.name
     }
   }
        render(){
            return(
                <div>
                <Laptop name={this.state.user}/>
                <Phone name={this.state.user}/>
                <Accessory name={this.state.user}/>
                <Profile name={this.state.user}/>
               {/* <div className="navbar">
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
             <Accessory />
          </div> */}
                </div>
            )
        }
    }
    
    export default UserAcceuil;
   

