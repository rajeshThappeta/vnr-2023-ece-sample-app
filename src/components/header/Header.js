import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { clearState } from "../../slices/loginSlice";

function Header() {
  let { userLoginStatus } = useSelector((state) => state.login);
  let dispath=useDispatch()

  function userLogout(){
    let actionObj=clearState();
    dispath(actionObj)
  }

  return (
    <div className="d-flex justify-content-around header py-2">
      <img
        src="https://www.vhv.rs/dpng/d/481-4816248_font-awesome-user-icon-png-clipart-png-download.png"
        width="50px"
        alt=""
      />

      <ul className="nav">
        {
          userLoginStatus===true? <li className="nav-item">
          <NavLink
            className="nav-link"
            onClick={userLogout}
            to="login"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "var(--heading-color)",
              background: isActive
                ? "var(--header-active-bg-color)"
                : "var(--heading-bg-color)",
              fontWeight: isActive ? "bold" : "",
            })}
          >
            Logout
          </NavLink>
        </li>
         :
         <>
         <li className="nav-item">
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "var(--heading-color)",
                background: isActive
                  ? "var(--header-active-bg-color)"
                  : "var(--heading-bg-color)",
                fontWeight: isActive ? "bold" : "",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="register"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "var(--heading-color)",
                background: isActive
                  ? "var(--header-active-bg-color)"
                  : "var(--heading-bg-color)",
                fontWeight: isActive ? "bold" : "",
              })}
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="login"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "var(--heading-color)",
                background: isActive
                  ? "var(--header-active-bg-color)"
                  : "var(--heading-bg-color)",
                fontWeight: isActive ? "bold" : "",
              })}
            >
              Login
            </NavLink>
          </li>
         </>
         }
       
          
       
       
      </ul>
    </div>
  );
}

export default Header;


