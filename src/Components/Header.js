import React, { Component } from "react";
export default class Header extends Component {
  logOut = () => {
    // console.log(this.props);
    this.props.props.history.push("/login");
    localStorage.clear();
  };
  render() {
    return (
      <div>
        <header className="main-header">
          {/* Logo */}
          <a href="#" className="logo">
            {/* mini logo for sidebar mini 50x50 pixels */}
            <span className="logo-mini">
              <b>A</b>LT
            </span>
            {/* logo for regular state and mobile devices */}
            <span className="logo-lg">
              <b>Admin</b>LTE
            </span>
          </a>
          {/* Header Navbar: style can be found in header.less */}
          <nav className="navbar navbar-static-top">
            {/* Sidebar toggle button*/}
            <a
              href="#"
              className="sidebar-toggle"
              data-toggle="push-menu"
              role="button"
            >
              <span className="sr-only">Toggle navigation</span>
            </a>
            {/* Navbar Right Menu */}
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                {/* User Account: style can be found in dropdown.less */}
                <li className="dropdown user user-menu">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img
                      src="dist/img/user2-160x160.jpg"
                      className="user-image"
                      alt="User Image"
                    />
                    <span className="hidden-xs">Alexander Pierce</span>
                  </a>
                  <ul className="dropdown-menu">
                    {/* User image */}
                    <li className="user-header">
                      <img
                        src="dist/img/user2-160x160.jpg"
                        className="img-circle"
                        alt="User Image"
                      />
                      <p>
                        Alexander Pierce - Web Developer
                        <small>Member since Nov. 2012</small>
                      </p>
                    </li>
                    {/* Menu Body */}
                    <li className="user-body">
                      <div className="row">
                        <div className="col-xs-4 text-center">
                          <a href="#">Followers</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="#">Sales</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="#">Friends</a>
                        </div>
                      </div>
                      {/* /.row */}
                    </li>
                    {/* Menu Footer*/}
                    <li className="user-footer">
                      <div className="pull-left">
                        <a href="#" className="btn btn-default btn-flat">
                          Profile
                        </a>
                      </div>
                      <div className="pull-right" onClick={this.logOut}>
                        <a href="#" className="btn btn-default btn-flat">
                          Sign out
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
