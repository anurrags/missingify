import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import logo from "./logo.png";
import { AuthContext } from "../../store/FirebaseContext";
import Loader from "../../shared/loader";
const Navigation = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <>
      {user.loader && <Loader />}
      <div className="navigation">
        <div className="left">
          <Link to="/">
            <img src={logo} className="logo-img" alt="missingify" />
          </Link>
        </div>
        <div className="title">
          <span>Missingify</span>
        </div>
        <div className="right">
          {user.isLogged ? (
            <>
              <Link to="/logout">
                <div className="button-logout">{user.userName}</div>
              </Link>
              <Link to="/logout">
                <div className="button-link">Logout</div>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <div className="button-link">Login</div>
              </Link>
              <Link to="/signup">
                <div className="button-link">Register</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
