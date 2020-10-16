import React from "react";

import SignIn from "./SignIn.jsx"
import App from "./App.jsx"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: "",
      password: "",
      check:""
    }
    this.check=this.check.bind(this)
  }
  componentDidMount(){
    axios.get("http://localhost:3000/user").then((res)=>{
      this.setState({
        users:res.data,
        name: "",
        password: "",
        check:""
      })
    })
  }
  check(e){
    e.preventDefault();
    const arrayName = this.state.users.map((element)=>
    element.name )
    console.log(arrayName)
    const arrayPassword = this.state.users.map((element)=>
    element.password )
    if(arrayName.indexOf(this.state.name) === -1){
      alert("you should have account first , please sign In ")
      this.setState({check:"signin"})
    }else  if(arrayName.indexOf(this.state.name) !== -1 && arrayPassword[arrayName.indexOf(this.state.name)] !== this.state.password ){ 
      alert("verifier your password ")
    }else  if(arrayName.indexOf(this.state.name) !== -1 && arrayPassword[arrayName.indexOf(this.state.name)] === this.state.password ){
      alert("Welcome " + this.state.name)
      this.setState({check:"acceuil"})
    } 
  }
  
  render() {
    if(this.state.check === ""){
      return (
        <div className=" SignInForm ">
          <form onSubmit={(e)=>this.check(e)}>
            <input
              type="text"
              name="name"
              placeholder="UserName "
              value={this.state.name}
              onChange={(e)=>{this.setState({name:e.target.value})}}
            /><br></br>
          
            <input
              type="password"
              name="password"
              placeholder="password "
              value={this.state.password}
              onChange={(e)=>{this.setState({password:e.target.value})}}
            /><br></br>
  
            <input type="submit" value="Sign In" /><br></br>
          </form>
        </div>
      )
    }else if(this.state.check === "signin"){
      return (
        <div>
          <SignIn/>
        </div>
      )
    }else if(this.state.check === "acceuil"){
    return (
      <div>
          <App name={this.state.name}/>
          {console.log(this.state.name)}
      </div>
    )
    }
  }
}

export default Login;
