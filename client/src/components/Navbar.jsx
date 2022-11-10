import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import ac from "../img/ac.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="link catagory" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link catagory" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link catagory" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link catagory" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link catagory" to="/?cat=desing">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link catagory" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          </div>

          <div className="right">

          {currentUser ? (  
          <div class="dropdown">
            <div className="account">
              <img src={ac} alt="" />
              <span>{currentUser?.username}</span>
            </div>
            <div class="dropdown-content">
              <div className="logout">
              <span onClick={logout}>Logout</span>
              </div>
            </div>
          </div>
          ) : (
            <div className="logout">
            <Link className="link" to="/login">
             <span>Login</span>
            </Link>
            </div>
          )}

          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
          </div>
        </div>
      </div>

  );
};

export default Navbar;
