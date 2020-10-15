import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      phoneNumber: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
        [e.target.name] : e.target.value
    });
  }

  handleSubmit(){

  }

  render() {
    return (
      <div className=" SignInForm ">
        <form onSubmit={this.handleSubmit}>
          <label>UserName :</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Phone Number :</label>
          <input
            type="number"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <input type="submit" value="SignIn" />
        </form>
      </div>
    );
  }
}

export default SignIn;
