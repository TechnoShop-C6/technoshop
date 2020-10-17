import React from 'react';
import axios from 'axios';

import Laptop from "./Laptop.jsx"
import Phone from "./Phone.jsx"
import Accessory from "./Accessory.jsx"
import Profile from "./Profile.jsx"
import Organisation from "./Organisation.jsx"
import Comments from "./Comments.jsx"
class UserAcceuil extends React.Component {
    constructor(props){
    super(props)
    this.state={
     data : [],
     user:this.props.name,
     check:"laptop"
     }
     this.organisation=this.organisation.bind(this)
     this.laptop=this.laptop.bind(this)
     this.phone=this.phone.bind(this)
     this.accessory=this.accessory.bind(this)
     this.profile=this.profile.bind(this)
     this.comments = this.comments.bind(this)
   }
   componentDidMount(){
       this.setState({
        check:"laptop"
       })
   }
   organisation(e){
       e.preventDefault()
       this.setState({
       check:"organisation"
   })
   }
   laptop(e){
       e.preventDefault()
       this.setState({
        check:"laptop"
    })
    }
    phone(e){
        e.preventDefault()
        this.setState({
         check:"phone"
     })
     }
    accessory(e){
        e.preventDefault()
        this.setState({
          check:"accessory"
        })
     }
    profile(e){
        e.preventDefault()
        this.setState({
         check:"profile"
        })
    }
    comments(e){
        e.preventDefault()
        this.setState({
        check:"comments"
    })
    }
         
        render(){
            if(this.state.check === "laptop"){
                return(
                    <div>
                  
                   <div className="navbar">
                <span className="logo"
                  onClick={(e) => this.organisation(e)}>
                     TECHNOSHOP🛒
                     </span>
                <span className="nav" className="nav-selected" onClick={(e) => this.laptop(e)}>
                     Laptop
                      </span>
                <span className="nav" onClick={(e) => this.phone(e)}> 
                    {" "}
                   Phone
                  </span>
                <span className="nav" onClick={(e) => this.accessory(e)}>
                {" "}
                Accessory
                </span>
                 <div className="leftnav">
                <span className="nav" onClick={(e) => this.profile(e)}>
                 {" "}
                 Profile
                </span>
                <span className="nav" onClick={(e) => this.comments(e)}>
                     Comments
                </span>
               </div>
                </div>
                <div className="main" > 
                    <Laptop name={this.state.user}/>
                    </div>

                </div>
                 )
            }else if(this.state.check ==="phone" ){
                return(
                    <div>
                  
                   <div className="navbar">
                <span className="logo"
                  onClick={(e) => this.organisation(e)}>
                     TECHNOSHOP🛒
                     </span>
                <span className="nav" onClick={(e) => this.laptop(e)}>
                     Laptop
                      </span>
                <span className="nav" className="nav-selected" onClick={(e) => this.phone(e)}> 
                    {" "}
                   Phone
                  </span>
                <span className="nav" onClick={(e) => this.accessory(e)}>
                {" "}
                Accessory
                </span>
                 <div className="leftnav">
                <span className="nav" onClick={(e) => this.profile(e)}>
                 {" "}
                 Profile
                </span>
                <span className="nav" onClick={(e) => this.comments(e)}>
                     Comments
                </span>
               </div>
                </div>
                <div className="main" > 
                    <Phone name={this.state.user}/>
                    </div>

                </div>
                 )
            }else if(this.state.check === "accessory"){
                return(
                    <div>
                  
                   <div className="navbar">
                <span className="logo"
                  onClick={(e) => this.organisation(e)}>
                     TECHNOSHOP🛒
                     </span>
                <span className="nav" onClick={(e) => this.laptop(e)}>
                     Laptop
                      </span>
                <span className="nav" onClick={(e) => this.phone(e)}> 
                    {" "}
                   Phone
                  </span>
                <span className="nav" className="nav-selected" onClick={(e) => this.accessory(e)}>
                {" "}
                Accessory
                </span>
                 <div className="leftnav">
                <span className="nav" onClick={(e) => this.profile(e)}>
                 {" "}
                 Profile
                </span>
                <span className="nav" onClick={(e) => this.comments(e)}>
                     Comments
                </span>
               </div>
                </div>
                <div className="main" > 
                    <Accessory name={this.state.user}/>
                    </div>

                </div>
                 )
            }else if(this.state.check === "profile"){
            return(
                <div>
              
               <div className="navbar">
            <span className="logo"
              onClick={(e) => this.organisation(e)}>
                 TECHNOSHOP🛒
                 </span>
            <span className="nav" onClick={(e) => this.laptop(e)}>
                 Laptop
                  </span>
            <span className="nav" onClick={(e) => this.phone(e)}> 
                {" "}
               Phone
              </span>
            <span className="nav" onClick={(e) => this.accessory(e)}>
            {" "}
            Accessory
            </span>
             <div className="leftnav">
            <span className="nav" className="nav-selected" onClick={(e) => this.profile(e)}>
             {" "}
             Profile
            </span>
            <span className="nav" onClick={(e) => this.comments(e)}>
                     Comments
                </span>
           </div>
            </div>
            <div className="main" > 
                <Profile name={this.state.user}/>
                </div>

            </div>
             )
            }else if(this.state.check === "organisation"){
                return(
                    <div>
                  
                   <div className="navbar">
                <span className="logo"
                  onClick={(e) => this.organisation(e)}>
                     TECHNOSHOP🛒
                     </span>
                <span className="nav" onClick={(e) => this.laptop(e)}>
                     Laptop
                      </span>
                <span className="nav" onClick={(e) => this.phone(e)}> 
                    {" "}
                   Phone
                  </span>
                <span className="nav" onClick={(e) => this.accessory(e)}>
                {" "}
                Accessory
                </span>
                 <div className="leftnav">
                <span className="nav" onClick={(e) => this.profile(e)}>
                 {" "}
                 Profile
                </span>
                <span className="nav" onClick={(e) => this.comments(e)}>
                     Comments
                </span>
               </div>
                </div>
                <div className="main" > 
                    <Organisation name={this.state.user}/>
                    </div>
    
                </div>
                 )
            }else if(this.state.check === "comments"){
                return(
                    <div>
                  
                   <div className="navbar">
                <span className="logo"
                  onClick={(e) => this.organisation(e)}>
                     TECHNOSHOP🛒
                     </span>
                <span className="nav" onClick={(e) => this.laptop(e)}>
                     Laptop
                      </span>
                <span className="nav" onClick={(e) => this.phone(e)}> 
                    {" "}
                   Phone
                  </span>
                <span className="nav" onClick={(e) => this.accessory(e)}>
                {" "}
                Accessory
                </span>
                 <div className="leftnav">
                <span className="nav" onClick={(e) => this.profile(e)}>
                 {" "}
                 Profile
                </span>
                <span className="nav" onClick={(e) => this.comments(e)}>
                     Comments
                </span>
               </div>
                </div>
                <div className="main" > 
                    <Comments name={this.state.user}/>
                    </div>
    
                </div>
                 )
            }
          
           
        }
    }
    
    export default UserAcceuil;
   

