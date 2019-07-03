import React, { Component } from "react";
import axios from "axios";
export default class Footer extends Component {
  state = {
    email: "",
    password: ""
  };
  addEmailToState = event => {
    this.setState({ email: event.target.value });
  };
  addPasswordToState = event => {
    this.setState({ password: event.target.value });
  };
  logIn = async event => {
    event.preventDefault();

    try {
      const data = await axios.post(
        "https://api.shipments.test-y-sbm.com/login",
        {
          email: this.state.email,
          password: this.state.password
        }
      );
      const result = data.data.data[0];

      localStorage.setItem(
        "token",
        JSON.stringify(result.token).replace(/\"/g, "")
      );

      this.props.history.push("/main");
    } catch (e) {
      alert("Username or password incorrect");
    }
  };
  render() {
    return (
      <div>
        <body class="hold-transition login-page">
          <div className="login-box">
            <div className="login-logo">
              <a>
                <b>Admin</b>LTE
              </a>
            </div>
            {/* /.login-logo */}
            <div className="login-box-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form action="../../index2.html" method="post">
                <div className="form-group has-feedback">
                  <input
                    onChange={this.addEmailToState}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <span className="glyphicon glyphicon-envelope form-control-feedback" />
                </div>
                <div className="form-group has-feedback">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={this.addPasswordToState}
                  />
                  <span className="glyphicon glyphicon-lock form-control-feedback" />
                </div>
                <div className="row">
                  {/* /.col */}
                  <div className="col-xs-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block btn-flat"
                      onClick={this.logIn}
                    >
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a className="btn btn-block btn-social btn-facebook btn-flat">
                  <i className="fa fa-facebook" /> Sign in using Facebook
                </a>
                <a className="btn btn-block btn-social btn-google btn-flat">
                  <i className="fa fa-google-plus" /> Sign in using Google+
                </a>
              </div>
              {/* /.social-auth-links */}
              <a>I forgot my password</a>
              <br />
              <a className="text-center">Register a new membership</a>
            </div>
            {/* /.login-box-body */}
          </div>
        </body>
      </div>
    );
  }
}
